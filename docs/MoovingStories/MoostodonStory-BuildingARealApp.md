# The Moostodon Story: Describing a Real API

## Introduction
In our previous blog post Designing an API with CADL we demonstrated the different capabilities of the CADL API design language. We walked through the evolution of simple API design to take advantage of the reuse, partitioning and refactoring that is possible with CADL and its tooling.

It is one thing to work with examples that were designed to show off the capabilities of CADL, but to really prove its value it is more useful to show how it can be used to design a real API. For this post we will show how we created a description of the Mastodon API using CADL. We will also show how we used the CADL tooling to generate client libraries for the API in multiple different languages.

## What is Mastodon?

Mastodon is a federated social network. It is a decentralized alternative to commercial platforms like Twitter and Facebook. It is free and open source software, and it is a community of people who share a common interest in decentralization and free software. Mastodon is a federated social network. It is a decentralized alternative to commercial platforms like Twitter and Facebook. It is free and open source software, and it is a community of people who share a common interest in decentralization and free software.

The Mastodon API is a REST API that allows applications to interact with Mastodon instances. It is a very rich API that allows applications to do things like post toots, follow other users, and search for users. It also allows applications to interact with the underlying data model of Mastodon. For example, it allows applications to create new users, create new statuses, and create new media attachments.

Mastodon uses OAuth2 for authentication. This means that applications must first register with the Mastodon instance they want to interact with. The Mastodon instance will then provide the application with a client ID and client secret. The application can then use these credentials to request an access token from the Mastodon instance. The access token can then be used to authenticate requests to the Mastodon API.

## Why Moostodon?

One of the curious aspects of the CADL name is that many people hear 'cattle' when they hear the name. In keeping with the bovine theme and a certain amount Canadian influence, Moostodon seemed like suitably silly name for this sample.

## State of the union

As far as HTTP APIs go, the Mastodon API is quite sizeable. It has more than a 100 endpoints and many different types of resource models.  It uses HTML forms for sending data and JSON payloads for returing data. A contributor to the Mastodon project recently submitted an [OpenAPI description](https://github.com/mastodon/mastodon/pull/20000/files) but at more than 5000 lines there is reluctance by the project to accept as it will require maintaining. Another [issue](https://github.com/mastodon/mastodon/issues/20572) is proposing the use of tooling to generate the OpenAPI description from the code as a more maintainable approach. While this approach works for some projects, it is not a design first approach, that is practiced by many teams.  CADL is a design first language that is more maintainable and get generate OpenAPI to be able to take advantage of the ecosystem of tooling that is available.

## Divide and conquer

Due to the size of the API, the first step in creating the API description was to divide the API into smaller pieces to make functionality easier to find.

CADL allows you to designate a single namespace as the service that exposes a set of operations by attaching the `@service` decorator.

```cadl
@service({
  title: "Mastodon",
  version: "1.0.0"
})
@route("/")
namespace MastodonApi {  

}
```
By attaching the `@route("/")` decorator to the namespace, all operations that are directly inside the `MastodonApi` namespace will be hosted at the root of the API. 

In the following example the OAuthService is hosted at the `/oauth` path. The definition of the OAuthService is in a separate file that is imported into the main API description.

```cadl

@route("/")
namespace MastodonApi {  

  @route("oauth")
  interface oauthResource extends OAuthService {}

  @route("api/v1")
  namespace v1 {

    @route("accounts")
    interface AccountsResource extends AccountsService {}

  }

  @route("api/v2")
  namespace v2 {
  
    @route("search")
    interface SearchResource extends SearchService {}

  }
}
```
Over the years, the Mastodon API has evolved and some resource have been replaced by a V2 API.  However, only some of the resources exist in the V2 API so it is necessary to describe both the v1 and v2 APIs.  CADL allows us to group these using nested namespaces.

This approach of creating a new "resource" interface that derives from the "service" interface is not absolutely necessary. If AccountService was defined directly in the `MastodonApi` namespace it could have a `@route("accounts")` decorator attached to it and by importing the file that contains the definition, the operations would be immediately available.  However, this approach does not allow us to reuse the `AccountsService` interface in other places. This can be seen in the following example:

```cadl
  @route("api/v1")
  namespace v1 {

    @route("accounts")
    interface AccountsResource extends AccountsService {}

    @route("mutes")
    interface MutesResource extends NamedSet<Account>{ }

    @route("blocks")
    interface BlocksResource extends NamedSet<Account>{ }

    @route("endorsements")
    interface EndorsementsResource extends NamedSet<Account>{ }

  }

```

In this example, the `MutesResource`, `BlocksResource` and `EndorsementsResource` all have the same shape. They are all sets of accounts that all support the same operations.  By reusing the generic `NamedSet` interface we can reuse the same interface in all three places.

The definition of the `AccountsService` interface is in a separate file that is imported into the main API description using `import "./services/accounts.cadl";` at the top of the main CADL file.

```cadl
interface AccountsService {
  // Register a new account.
  @post createAccount(
    @body body: CreateAccountForm
  ): Account | UnauthorizedResponse;

  // Search for accounts.
  @route("search")
  @get search(
    @query q: string, 
    @query limit: int32, 
    @query following: boolean, 
    @query resolve: boolean
  ): Account[] | UnauthorizedResponse;

  // Find familiar followers
  @route("familiar_followers")
  @get getFamiliarFollowers(
    @query id: string[]
  ): FamiliarFollowers[] | UnauthorizedResponse | UnprocessableContentError; 
}
```