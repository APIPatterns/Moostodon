# "Correct by Construction" - The value of Cadl in designing APIs

## Introduction

As a developer, you want APIs that are well designed, inutitive, and easy to use. This is especially true as you build applications that combine data and services from multiple sources. In Microsoft graph, and Azure, we have a set of design principles and API guidelines that we all teams should follow to ensure that our APIs are easy to use and intuitive. However, as the number of services continues to exand, teams become more distributed, and our API surface area grows, it becomes challenging to ensure that we are following these principles.

One challenge that we face is driving consistency in how our API specifications are written. Often, the specifications are built by different individuals and teams within the same organization, and over time, can become quite large and complex. For example, the Azure Conginitive Services [Metrics Advisor specification](https://github.com/Azure/azure-rest-api-specs/blob/main/specification/cognitiveservices/data-plane/MetricsAdvisor/stable/v1.0/MetricsAdvisor.json) is almost 7,000 lines! In addition to consistency and size, we also struggle with reuse. While this is easy in code, it's challenging when working with OpenAPI documents. 

And Microsoft isn't along in these challenges. Many organizations are strugging through finding answers to how to build and manage APIs at scale. We are seeing an emerging set of companies, and tools that are working to provide solutions to difficult problems. One tool that Microsoft is beginning to have success with is [Cadl](https://microsoft.github.io/cadl/), a new language for describing APIs.

## "Correct by Construction"
Unlike other tools in the API space, Cadl is a language with a syntax that is similar to JavaScript, but built for explicitely describing APIs. In fact, we often describe Cadl as "TypeScript for OpenAPI." Because Cadl is a language, it provides a number of benefits that other tools don't.

* Familiar syntax: Cadl is a very similar to JavaScript, so it's easy for developers to learn and use.
* Great tooling support: IDE extensions in VS Code and Visual Studio includes syntax highlighting, linting, and auto-completion.
* Extensible: Developers can codify their API guidelines and best practices into a set of rules that can be enforced by Cadl.
* Highly expressive: API descriptions are very terse and core concepts encapsulated into common libraries.

Authoring your API, you can compile your Cadl file to emit a complete OpenAPI specificaiton that can be used to drive your existing tool chain. Because Cadl is compiled--as compared to linted--it ensures that your specifications are correct and accurate. Just like you can't compile a C# class with errors, you can't produce an OpenAPI specification that does not adhere to your rules and guidelines. Using Cadl, all of your APIs will be "correct by construction."


## Building an example Cadl library

The code for this example is located at [cadl-demo](https://github.com/APIPatterns/cadl-demo), and originated from the Http example in the [Cadl-playground](https://aka.ms/trycadl). It will help accelerate your understanding of this post if you load up this examplea and get a bit familiar with Cadl. Because has rich tooling support in VS Code and Visual Studio, which gives developers full language support and makes refactoring APIs super easy, we'll use VS Code and the OpenAPI with the OpenAPI extension for the rest of this post. We will also use examples from the [Azure REST API Guidelines](https://aka.ms/azapi/guidelines) to illustrate how you can codify your own API standards. 

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

Now we want to add an enpoint for our new `Gadget` resource. We could copy and paste the `WidgetService`, but then, we'd have to do this for all endpoints! 

## Building an example Cadl library

Instead, let's use the power of the Cadl language to define a common interface that all of our resources. To do this, we can create a [`library.cadl`](https://github.com/APIPatterns/cadl-demo/blob/main/library.cadl) file that we will share across all of our development teams.

```typescript
interface ResourceInterface<T> {
    @get list(...ApiVersion): List<T> | Error;
    @get read(@path id: string, ...ApiVersion): T | Error;
    @put create(@body body: T, ...ApiVersion): T | Error;
    @patch update(@body body: Patch<T>, ...ApiVersion): T | Error;
    @delete delete(@path id: string, ...ApiVersion): void | Error;
  }
```


One reason for this is because we have a lot of different languages and frameworks that we use to build our APIs. This means that we have to write a lot of boilerplate code to ensure that our APIs are consistent and well designed.


We also have a set of tools that we use to ensure that our APIs are consistent and well designed. 





[Cadl](https://microsoft.github.io/cadl)