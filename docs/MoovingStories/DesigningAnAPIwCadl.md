# "Correct by Construction" - The value of Cadl in designing APIs

<!-- cspell:ignore cadl -->
## Introduction

As a developer, you want APIs that are well designed, intuitive, and easy to use. This is especially true as you build applications that combine data and services from multiple sources. In Microsoft Graph and Azure, we have a set of design principles and API guidelines that our teams should follow to ensure that our APIs are easy to use and intuitive. However, as the number of services continues to expand, teams become more distributed, and our API surface area grows, it becomes challenging to ensure that we are following these principles.

One challenge that we face is driving consistency in how our API specifications are written. Often, the specifications are built by different individuals and teams within the same organization, and over time, can become quite large and complex. For example, the Azure Cognitive Services [Metrics Advisor REST API definition](https://github.com/Azure/azure-rest-api-specs/blob/main/specification/cognitiveservices/data-plane/MetricsAdvisor/stable/v1.0/MetricsAdvisor.json) is almost 7,000 lines! In addition to consistency and size, we also struggle with reuse. While this is easy in code, it's challenging when working with OpenAPI documents.

And Microsoft isn't alone in these challenges. Many organizations are struggling through finding answers for how to build and manage APIs at scale. We are seeing an emerging set of companies and tools that are working to provide solutions to difficult problems. One tool that Microsoft is beginning to have success with is [Cadl](https://microsoft.github.io/cadl/), a new language for describing APIs.

## "Correct by Construction"

Unlike other tools in the API space, Cadl is a language with a syntax that is similar to TypeScript, but built explicitly for describing APIs. In fact, we sometimes describe Cadl as "TypeScript for OpenAPI." Because Cadl is a language, it provides a number of benefits that other tools don't.

* Familiar syntax: Cadl borrows many language elements from popular programming languages like TypeScript and C#, so it's easy for developers to learn and use.
* Great tooling support: IDE extensions in VS Code and Visual Studio includes syntax highlighting, go to definition, linting, and auto-completion.
* Extensible: Developers can codify their API guidelines and best practices into a set of rules that can be enforced by Cadl.
* Highly expressive: API descriptions are very terse and core concepts encapsulated into common libraries.

Authoring your API, you can compile your Cadl file to emit a complete OpenAPI specification that can be used to drive your existing tool chain. Because Cadl is compiled--as compared to linted--it ensures that your specifications are correct and accurate. Just like you can't compile a C# class with errors, you can't produce an OpenAPI definition that does not adhere to your rules and guidelines. Using Cadl, all of your APIs will be "correct by construction."

## Building an example Cadl library

The code for this example is located at [cadl-demo](https://github.com/APIPatterns/cadl-demo), and originated from the Http example in the [Cadl-playground](https://aka.ms/trycadl). It will help accelerate your understanding of this post if you load up this example and get familiar with Cadl. Because Cadl has rich tooling support in VS Code and Visual Studio, which gives developers full language support and makes refactoring APIs super easy, we'll use VS Code and the OpenAPI extension for the rest of this post. We will also use examples from the [Azure REST API Guidelines](https://aka.ms/azapi/guidelines) to illustrate how you can codify your own API standards.

### Getting started

Open the [Cadl docs](https://aka.ms/cadl) and click on the Installation tab and then follow the steps there to install the tools and create a new Cadl project. This should result in a new empty Cadl project with:
```
package.json      # Package manifest defining your cadl project as a node package.
cadl-project.yaml # Cadl project configuration letting you configure emitters, emitter options, compiler options, etc.
main.cadl         # Cadl entrypoint
```

Next we'll create our initial Cadl file using the [Cadl playground](https://aka.ms/trycadl). The Cadl playground is a great place to experiment with and share simple Cadl definitions. Open the playground and select the Http service example. View the SwaggerUI by choosing it from the dropdown in the right pane. We'll make a few small changes that will help illustrate some points later in the discussion:

* Add `version: 1.0.0` to the service decorator
* Change `@key` to `@path` on the `id` property in the Widgets model
* Add `@route("/widgets")` and `@tag("Widgets")` to the Widgets interface
* Remove `@route` from read
* Replace the `@get customRead` operation with `@route("analyze") @post analyze()` that returns `string | Error`;

The result should look like this:

```cadl
import "@cadl-lang/rest";

@service({
  title: "Widget Service",
  version: "1.0.0"
})
namespace DemoService;
using Cadl.Http;

model Widget {
  @path id: string;
  weight: int32;
  color: "red" | "blue";
}

@error
model Error {
  code: int32;
  message: string;
}

@route("/widgets")
@tag("Widgets")
interface Widgets {
  @get list(): Widget[] | Error;
  @get read(@path id: string): Widget | Error;
  @post create(@body body: Widget): Widget | Error;
  @route("analyze") @post analyze(): string | Error;
}
```

Copy this to the `main.cadl` file in your VS Code project. Now you can run `cadl compile .` in your VS Code terminal and it will produce an `openapi.json` file in the `cadl-output` directory with your generated OpenAPI 3 definition. You can view this in VS Code and open the Swagger UI view and it should look exactly like the view in the Cadl playground.

#### Adding Gadgets

Most services will have more than one resource (model) and endpoint. In this example, we'll add the `Gadget` resource to our API definition. Using Cadl, it's easy to add another model:

```typescript
model Gadget {
  @path id: string;
  height: float32;
  width: float32;
  color: "green" | "yellow";
}
```

Now we want to add an endpoint for our new `Gadget` resource. We could copy and paste the `Widgets` interface, but then, we'd have to copy/paste the same operation definition for all endpoints! As developers, we prefer a way we can define something once, and reuse it multiple times. Because Cadl is a *language* for developing APIs, this is exactly what we can do.

## Building a Cadl library

Let's use the power of the Cadl language to define an *interface template* that can be reused across all of our resources. We'll create a new `library.cadl` file to contain this template and any common definitions. When developers define their API, they will simply say that it *extends* our resource creation interface. In this way, when the Cadl file is compiled, and the OpenAPI document emitted, it will have the required operations, constructed in exactly the way we defined them.

We'll move the `Error` model from the `main.cadl` to the new file and then define an interface template that defines a `list`, `create`, and `get` operation similar to our `Widgets` interface, using a type parameter in place of the `Widget` model. The `library.cadl` now looks like:

```cadl
import "@cadl-lang/rest";

using Cadl.Http;

@error
model Error {
  code: int32;
  message: string;
}

interface ResourceInterface<T> {
    @get list(): T[] | Error;
    @get read(@path id: string): T | Error;
    @post create(@body body: T): T | Error;
  }
```

Back in the `main.cadl` file, we can now use the new `ResourceInterface` template for both `Widgets` and `Gadgets` as follows:

```cadl
@route("/widgets")
@tag("Widgets")
interface Widgets extends ResourceInterface<Widget> {
  @route("analyze") @post analyze(): string | Error;
}

@route("/gadgets")
@tag("Gadgets")
interface Gadgets extends ResourceInterface<Gadget> {
}
```

Notice that we kept the `analyze` operation of `Widgets` as this is not part of the "standard" interface for all resources.

At this point, it's worth noting that our Cadl definition is a mere 51 lines across two files but produces an OpenAPI definition that is 470 lines -- nearly an order of magnitude difference.

## Integrating API Guidelines

Next let's look at how we ensure that our APIs are well designed, intuitive, and easy to use. This is generally the goal of API guidelines, and here we'll use [Azure's REST API guidelines](https://aka.ms/azapi/guidelines) as an example.

### Error Response

[Azure's API guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#handling-errors) require an operation error response to have a standard structure and contents, in particular:

✅ DO return an x-ms-error-code response header with a string error code indicating what went wrong.

✅ DO provide a response body with the following structure

The error response in our current Cadl definition does not meet these requirements, but this is easily remedied with a few changes to the error model in `library.cadl`.  Since all operations are already using this one error model, we only need to make the change in this one place. Here's the new definition that complies with the above guidelines:

```cadl
@error
@doc("Error response")
model Error {
    @doc("A server-defined code that uniquely identifies the error.")
    @header("x-ms-error-code")
    code: string;
    @doc("Top-level error object")
    error: ErrorDetail;
}

@doc("Error details")
model ErrorDetail {
  @doc("A server-defined code that uniquely identifies the error.")
  code: string;
  @doc("A human-readable representation of the error.")
  message: string;
  @doc("An array of details about specific errors that led to this reported error.")
  details?: ErrorDetail[];
}
```

We've also added `@doc` decorators on the models and properties to produce descriptions on these elements in the generated OpenAPI, which will be shown in the REST API documentation generated from the OpenAPI.

### Standard Operations

Next we'll tackle the standard operations in our `ResourceInterface` template. The [Azure API Guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#collections) require the response of a list operation to have a specific structure that supports extension and pagination (where needed). Specifically:

✅ DO structure the response to a list operation as an object with a top-level array field containing the set (or subset) of resources.

✅ DO return a nextLink field with an absolute URL that the client can GET in order to retrieve the next page of the collection.

☑️ YOU SHOULD use value as the name of the top-level array field unless a more appropriate name is available.

Azure also requires all operations to be idempotent -- including creates. Most resources also need to support an `update` operation and a delete operation. Azure's specific guidelines for these are:

✅ DO ensure that all HTTP methods are idempotent.

☑️ YOU SHOULD use PUT or PATCH to create a resource as these HTTP methods are easy to implement, allow the customer to name their own resource, and are idempotent.

✅ DO create and update resources using PATCH [RFC5789] with JSON Merge Patch (RFC7396) request body.

✅ DO return a 204-No Content without a resource/body for a DELETE operation

Once again we can comply with all the above guidelines with some straightforward changes to the `library.cadl` file:

- Define a model for the response structure of a list operation.
- Define a model for the JSON Merge Patch request body.
- Update the `list` operation to use the new response model.
- Change the `create` operation to use the put method. 
- Add an update operation that accepts the new `Patch` model.
- Add a delete operation that returns `void`, which becomes a 204 response.

Here's what the `ResourceInterface` looks like in our `library.cadl` file. Notice that it has all the standard operations you would expect. `GET` operations for the collection, a `GET` with an `id` for a specific resource, and the create, update, and delete operations with `PUT`, `PATCH`, and `DELETE` respectively. Here's the changed section of `library.cadl`:

```cadl
model List<T> {
    @doc("List of elements")
    value: T[];
    @doc("A link to the next page of results if present.")
    nextLink?: url;
}

model Patch<T> {
    @header contentType: "application/merge-patch+json";
    ...T;
}

interface ResourceInterface<T> {
    @get list(): List<T> | Error;
    @get read(@path id: string): T | Error;
    @put create(@body body: T): T | Error;
    @patch update(@body body: Patch<T>): T | Error;
    @delete delete(@path id: string): void | Error;
  }
```

### API Versioning

Change is inevitable in all things including APIs, and Azure requires all APIs to implement explicit versioning support in the form of a required `api-version` query parameter on every operation. Here are some of the specific requirements from the [Azure API Guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#api-versioning).

✅ DO use a required query parameter named api-version on every operation for the client to specify the API version.

✅ DO use YYYY-MM-DD date values, with a -preview suffix for preview versions, as the valid values for api-version.

Since the `api-version` query parameter must be passed on all operations it makes sense to define it once in the `library.cadl` file. Here's what that might look like:

```cadl
model ApiVersion {
    @doc("The version of the API in the form YYYY-MM-DD")
    @query("api-version") apiVersion: string;
}
```

And now we can add this to all of the operations in the `ResourceInterface` template, and all the `Widgets` and `Gadgets` operations that derive from the template come into compliance with the above guidelines. We use the *spread* operator on the `ApiVersion` model to add `apiVersion` into the parameter list.

```cadl
interface ResourceInterface<T> {
    @get list(...ApiVersion): List<T> | Error;
    @get read(@path id: string, ...ApiVersion): T | Error;
    @put create(@body body: T, ...ApiVersion): T | Error;
    @patch update(@body body: Patch<T>, ...ApiVersion): T | Error;
    @delete delete(@path id: string, ...ApiVersion): void | Error;
  }
```

But we're not yet fully in compliance with the API Versioning requirements, because there is still the `analyze` operation of the `Widgets` interface over in `main.cadl` that does not have an `api-version` parameter. And as the API continues to grow there may be other operations outside `library.cadl` that we need to make sure include an `api-version` parameter. Cadl has a solution for this too -- built-in linter support.

### Linting with Cadl

Cadl allows libraries to define a function that checks a Cadl program for specific patterns and issue diagnostics (linter messages). Typically these linter functions are written in TypeScript and then compiled and run as JavaScript as part of the Cadl compilation. For expediency, we're going to implement our linter in JavaScript directly, but please don't take this as an endorsement of this approach.

We'll implement our linter in a file called `linter.js`, which we import into `library.cadl` to activate it. Our linter will use functions from the `@cadl-lang/lint` library so we need to install that library in our project. You can see the full source code for `linter.js` in the [cadl-demo project](https://github.com/APIPatterns/cadl-demo/blob/main/linter.js). Here are a few key points to focus on:

* lines 8-14 define the `version-policy` diagnostic which will be issued when the linter finds an operation without an `api-version` query parameter.
* lines 18-20 define a function that checks if a parameter has the necessary attributes of an `api-version` parameter -- its name, it is required (not optional), and it is a string type.
* lines 22-37 define the `versionPolicyRule`, which checks each operation (line 26) to see if "some" parameter is an apiVersion parameter and a query parameter. If not it issues the diagnostic.
* lines 42-43 register and enable the rule.

With the linter now included in our library, `cadl compile .` will issue a diagnostic and fail the compile if any operation is missing the `api-version` query parameter:

```bash
>cadl compile .
Cadl compiler v0.38.3

warning deprecated: Deprecated: `emitters` options in cadl-project.yaml is deprecated use `emit` and `options` instead.
Diagnostics were reported during compilation:

/Users/mikekistler/Projects/mikekistler/cadl-demo/main.cadl:27:3 - error myLibrary/version-policy: Every operation must have a required 'api-version' query parameter
> 27 |   @route("analyze") @post analyze(): string | Error;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Found 1 error.
```

## Wrap-up

In this post we've taken you through some of the key value propositions of Cadl:

* Cadl provides a natural and concise expression of API constructs that produces a standard OpenAPI v3 API definition.
* Cadl enables definition and reuse of API patterns.
* Cadl makes it easy to incorporate your organization's API guidelines into these reusable patterns so that when developers use them they automatically get compliant APIs.
* Cadl allows you to build linters right into your reusable libraries that signal to developers when they have possibly crossed one of your guidelines.

And throughout we have demonstrated how the Cadl tooling in VS Code makes developers productive through syntax highlighting, code completion, continuous error checking, and integrated help.

All these add up to a system that enables developers to build APIs that are correct by construction.

[Cadl](https://microsoft.github.io/cadl)
