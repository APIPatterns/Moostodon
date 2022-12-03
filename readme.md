# Moostodon

This repo contains a demonstration of using [CADL](https://microsoft.github.io/cadl/) to describe the Mastodon API and then using [Kiota](https://microsoft.github.io/kiota/) to generate API clients from the OpenAPI emitted from the CADL compiler.

## Getting Started
Everything you need to get started designing APIs in CADL can be found in the [CADL documentation](https://microsoft.github.io/cadl/).  If you are looking to generate API clients from OpenAPI, you can find the documentation for Kiota [here](https://microsoft.github.io/kiota/).


## Running the demo

To regenerate the OpenAPI from the CADL you will need to have the CADL compiler installed.  You can find instructions for installing the CADL compiler [here](https://microsoft.github.io/cadl/introduction/installation).

From the spec directory, run the following command to generate the OpenAPI document:

```bash
cadl compile ./main.cadl
```

To generate the API clients, you will need to have Kiota installed.  You can find instructions for installing Kiota [here](https://microsoft.github.io/kiota/get-started/).

From the `csharpMastodonConsole` folder within the clients folder, run the following command to generate the API client:

```bash
kiota generate -l csharp  -o .\sdk -d ..\..\spec\cadl-output\openapi.json -c MastodonClient -n MastodonClientLib --co
```

Currently there is a minimal set of example calls in the program.cs file. You can run this using:
    
```bash 
dotnet restore
dotnet build
dotnet run
```
<div style="text-align: center;">

[![Moose with Canadian flag](moostodon.png)]

</div>