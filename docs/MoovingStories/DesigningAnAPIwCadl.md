# "Correct by Construction" - The value of Cadl in designing APIs

<!-- cspell:ignore cadl -->
## Introduction

As a developer, you want APIs that are well designed, intuitive, and easy to use. This is especially true as you build applications that combine data and services from multiple sources. In Microsoft graph, and Azure, we have a set of design principles and API guidelines that we all teams should follow to ensure that our APIs are easy to use and intuitive. However, as the number of services continues to expand, teams become more distributed, and our API surface area grows, it becomes challenging to ensure that we are following these principles.

One challenge that we face is driving consistency in how our API specifications are written. Often, the specifications are built by different individuals and teams within the same organization, and over time, can become quite large and complex. For example, the Azure Cognitive Services [Metrics Advisor specification](https://github.com/Azure/azure-rest-api-specs/blob/main/specification/cognitiveservices/data-plane/MetricsAdvisor/stable/v1.0/MetricsAdvisor.json) is almost 7,000 lines! In addition to consistency and size, we also struggle with reuse. While this is easy in code, it's challenging when working with OpenAPI documents.

And Microsoft isn't along in these challenges. Many organizations are struggling through finding answers to how to build and manage APIs at scale. We are seeing an emerging set of companies, and tools that are working to provide solutions to difficult problems. One tool that Microsoft is beginning to have success with is [Cadl](https://microsoft.github.io/cadl/), a new language for describing APIs.

## "Correct by Construction"

Unlike other tools in the API space, Cadl is a language with a syntax that is similar to JavaScript, but built for explicitly describing APIs. In fact, we often describe Cadl as "TypeScript for OpenAPI." Because Cadl is a language, it provides a number of benefits that other tools don't.

* Familiar syntax: Cadl is a very similar to JavaScript, so it's easy for developers to learn and use.
* Great tooling support: IDE extensions in VS Code and Visual Studio includes syntax highlighting, linting, and auto-completion.
* Extensible: Developers can codify their API guidelines and best practices into a set of rules that can be enforced by Cadl.
* Highly expressive: API descriptions are very terse and core concepts encapsulated into common libraries.

Authoring your API, you can compile your Cadl file to emit a complete OpenAPI specification that can be used to drive your existing tool chain. Because Cadl is compiled--as compared to linted--it ensures that your specifications are correct and accurate. Just like you can't compile a C# class with errors, you can't produce an OpenAPI specification that does not adhere to your rules and guidelines. Using Cadl, all of your APIs will be "correct by construction."

## Building an example Cadl library

The code for this example is located at [cadl-demo](https://github.com/APIPatterns/cadl-demo), and originated from the Http example in the [Cadl-playground](https://aka.ms/trycadl). It will help accelerate your understanding of this post if you load up this examples and get a bit familiar with Cadl. Because has rich tooling support in VS Code and Visual Studio, which gives developers full language support and makes refactoring APIs super easy, we'll use VS Code and the OpenAPI with the OpenAPI extension for the rest of this post. We will also use examples from the [Azure REST API Guidelines](https://aka.ms/azapi/guidelines) to illustrate how you can codify your own API standards.

### Getting started

Open the [Cadl docs](https://aka.ms/cadl) and click on the Installation tab then follow the steps there to create a new Cadl project. Open the Cadl playground at [Cadl playground](https://aka.ms/trycadl) and select the Http service example. View the SwaggerUI by choosing it from the dropdown in the right pane. Make a few small changes and then copy to the `main.cadl` file in your VS Code project. You should have a Cadl file that has an interface in it that looks something like this:

```typescript
interface WidgetService {
  @get list(): Widget[] | Error;
  @route("widgets/{id}") @get read(@path id: string): Widget | Error;
  @post create(@body body: Widget): Widget | Error;
  @route("customGet") @get customGet(): Widget | Error;
}
```

#### Adding Gadgets

APIs typically have more than one resource (model) and a single endpoint. In this example, we'll add `Gadgets`. Using Cadl, it's easy to add another model:

```typescript
model Gadget {
  @path id: string;
  height: float32;
  width: float32;
  color: "green" | "yellow";
}
```

Now we want to add an endpoint for our new `Gadget` resource. We could copy and paste the `WidgetService`, but then, we'd have to copy/paste the same operation definition for all endpoints! As developers, we prefer a way we can define something once, and reuse it multiple times. Because Cadl is a *language* for developing APIs, this is exactly what we can do.

## Building a Cadl library

Let's use the power of the Cadl language to define a common *interface* that will be reused across all of our resources. The Azure REST API Guidelines recommend using `PUT` for resource creation, `PATCH` for updates, and `DELETE` for, well, delting an object. However, developers who are not familiar with the REST guidelines will often use a `POST` to create resources. What we'd like to do is ensure that all APIs follow this pattern. 

To do this, we'll create an interface that represents the resource creation pattern that are in our guidelines. We'll put this pattern in a seperate file, [`library.cadl`](https://github.com/APIPatterns/cadl-demo/blob/main/library.cadl), that we will share across all of our development teams. When develpers define their API, they will simply say that it *extends* our resource creation interface. In this way, when the Cadl file is compiled, and the OpenAPI document emitted, it will have the required operations, constructed in exactly the way we defined them. 

Here's what the `ResourceInterface` looks like in our `library.cadl` file. Notice that it has all the standard operations you would expect. `GET` operations for the collection, a `GET` with an `id` for a specific resource, and the create, update, and delete operations with `PUT`, `PATCH`, and `DELETE` respectively. 

Notice also that each operation accepts an `ApiVersion` as a spread argument. This is because the Azure REST Guidelines indicate that version should be present on every call as a query parameter. 

```typescript
interface ResourceInterface<T> {
    @get list(...ApiVersion): List<T> | Error;
    @get read(@path id: string, ...ApiVersion): T | Error;
    @put create(@body body: T, ...ApiVersion): T | Error;
    @patch update(@body body: Patch<T>, ...ApiVersion): T | Error;
    @delete delete(@path id: string, ...ApiVersion): void | Error;
  }
```

This resource creation scenario illustrates one of the key differences between using a compiled language, i.e. Cadl, and linting an OpenAPI specification. When linting an OpenAPI document using a tool like Spectral, there is no way to determine when a `POST` is used for resource creation and when it's used for another purpose. Yet with Cadl, you define the exact API semantics and let the compiler enforce them. 

### Linting with Cadl
Cadl decorators provide an incredible amount of flexibility for developers building common libraries to encapsulate their best practices and rules. Cadl also provides the ability create linters, that act execute after all the decorators have been applied.

The in the [cadl-demo](https://github.com/APIPatterns/cadl-demo) folder, you will see a [linter.js](https://github.com/APIPatterns/cadl-demo/linter.js) file. This is a simple Javascript file that codifies the rule that all operations must have a query paramer called `api-version`.

For example, suppose that, as part of our `Widget` definition, we need to perform an action to analyze the widget. 

```typescript
@route("/widgets")
@tag("Widgets")
interface Widgets extends ResourceInterface<Widget> {
  @route("analyze") @post analyze(): string | Error;
}
```

```typescript
@route("/widgets")
@tag("Widgets")
interface Widgets extends ResourceInterface<Widget> {
  @route("analyze") @post analyze(...ApiVersion): string | Error;
}
```

Common models and interfaces will take you a long way with Cadl.

[Cadl](https://microsoft.github.io/cadl)
