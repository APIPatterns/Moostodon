using System.Linq;
using System.Text;
using MastodonClientLib;
using MastodonClientLib.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using Microsoft.Kiota.Http.HttpClientLibrary;
using MoostodonConsole;

public class MastodonService {

    private MastodonClient client;
    private OAuth2AuthorizationProvider _authProvider;

    public MastodonService(string baseUrl)
    {
        _authProvider = new OAuth2AuthorizationProvider(CredsHack.ClientId, CredsHack.ClientSecret, "urn:ietf:wg:oauth:2.0:oob", baseUrl);
        var requestAdapter = new HttpClientRequestAdapter(_authProvider);
        SerializationWriterFactoryRegistry.DefaultInstance.ContentTypeAssociatedFactories.Add("application/x-www-form-urlencoded",new FormSerializationWriterFactory());
        client = new MastodonClient(requestAdapter);
        _authProvider.Client = client;
        requestAdapter.BaseUrl = baseUrl;
    }

    // Search for Accounts, status and hashtags
    public async Task<List<Account>> SearchAccounts(string query, CancellationToken cancellationToken = default)
    {
        var searchResults = await client.Api.V2.Search.GetAsync(r => {
            r.QueryParameters.Q = query; 
            r.QueryParameters.Type = "accounts";
            }, cancellationToken: cancellationToken);
        return searchResults.Accounts;
    }

    // Create an app
    public async Task<Application> CreateApp(string appName, string redirectUri, string scopes, string website, CancellationToken cancellationToken = default)
    {
        var app = await client.Api.V1.Apps.PostAsync(new CreateAppForm() {
            Client_name = appName,
            Redirect_uris = redirectUri,
            Scopes = scopes,
            Website = website
        }, cancellationToken: cancellationToken);
        return app;
    }

    // Get a token
  
    // Get a specified account's followers
    public async Task<List<Account>> GetFollowers(string id, CancellationToken cancellationToken = default)
    {
        var followers = await client.Api.V1.Accounts[id].Followers.GetAsync(cancellationToken: cancellationToken);
        return followers;
    }


    // Get user's account details by id
    public async Task<Account> GetAccount(string id, CancellationToken cancellationToken = default)
    {
        var account = await client.Api.V1.Accounts[id].GetAsync(cancellationToken: cancellationToken);
        return account;
    }
    
    // Read user's timeline
    public async Task<List<Status>> ReadUserTimeline(CancellationToken cancellationToken = default)
    {
        var statuses = await client.Api.V1.Timelines.Home.GetAsync(cancellationToken: cancellationToken);
        return statuses;        
    }


    // Read public timeline
    public async Task<List<Status>> ReadPublicTimeline(CancellationToken cancellationToken = default)
    {
        var statuses = await client.Api.V1.Timelines.Public.GetAsync(cancellationToken: cancellationToken);
        return statuses;        
    }

    // Read tag statuses associated to a tag
    public async Task<List<Status>> ReadTagTimeline(string tag, CancellationToken cancellationToken = default)
    {
        var statuses = await client.Api.V1.Timelines.Tag[tag].GetAsync(cancellationToken: cancellationToken);
        return statuses;        
    }

    // Post a status
    public async Task<Status> PostStatus(string status, CancellationToken cancellationToken = default)
    {
        var newStatus = await client.Api.V1.Statuses.PostAsync(new CreateStatusForm() {
            Status = status
        }, cancellationToken: cancellationToken);
        return newStatus;
    }

    internal async Task LoginApp(CancellationToken cancellationToken = default)
    {
       await _authProvider.LoginApp(cancellationToken);
    }

    internal async Task LoginUser(string username, CancellationToken cancellationToken = default)
    {
        var url = _authProvider.GetUserAuthorizationUrl("write");
        //Display the url to the user and ask them to enter the code
        Console.WriteLine("Please open this url and sign in and copy code into console: " + url);
        Console.Write("Enter code: ");
        var code = Console.ReadLine();
        await _authProvider.LoginUser(code, cancellationToken);
    }
}
