using System.Linq;
using System.Text;
using MastodonClientLib;
using MastodonClientLib.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using Microsoft.Kiota.Http.HttpClientLibrary;

public class MastodonService {

    private MastodonClient client;
    private OAuth2AuthorizationProvider _authProvider;

    public MastodonService(string baseUrl)
    {
        _authProvider = new OAuth2AuthorizationProvider("clientId", "clientsecret", "urn:ietf:wg:oauth:2.0:oob");
        var requestAdapter = new HttpClientRequestAdapter(_authProvider);
        SerializationWriterFactoryRegistry.DefaultInstance.ContentTypeAssociatedFactories.Add("application/x-www-form-urlencoded",new FormSerializationWriterFactory());
        client = new MastodonClient(requestAdapter);
        _authProvider.Client = client;
        requestAdapter.BaseUrl = baseUrl;
    }

    // Search for Accounts, status and hashtags
    public async Task<List<Account>> SearchAccounts(string query)
    {
        var searchResults = await client.Api.V2.Search.GetAsync(r => {
            r.QueryParameters.Q = query; 
            r.QueryParameters.Type = "accounts";
            });
        return searchResults.Accounts;
    }

    // Create an app
    public async Task<Application> CreateApp(string appName, string redirectUri, string scopes, string website)
    {
        var app = await client.Api.V1.Apps.PostAsync(new CreateAppForm() {
            Client_name = appName,
            Redirect_uris = redirectUri,
            Scopes = scopes,
            Website = website
        });
        return app;
    }

    // Get a token
  
    // Get a specified account's followers
    public async Task<List<Account>> GetFollowers(string id)
    {
        var followers = await client.Api.V1.Accounts[id].Followers.GetAsync();
        return followers;
    }


    // Get user's account details by id
    public async Task<Account> GetAccount(string id)
    {
        var account = await client.Api.V1.Accounts[id].GetAsync();
        return account;
    }
    

    // Read public timeline
    public async Task<List<Status>> ReadPublicTimeline()
    {
        var statuses = await client.Api.V1.Timelines.Public.GetAsync();
        return statuses;        
    }

    // Read tag statuses associated to a tag
    public async Task<List<Status>> ReadTagTimeline(string tag)
    {
        var statuses = await client.Api.V1.Timelines.Tag[tag].GetAsync();
        return statuses;        
    }

    internal void LoginApp()
    {
       _authProvider.LoginApp();
    }

    internal void LoginUser(string username)
    {
        var url = _authProvider.GetUserAuthorizationnUrl(username);
        //Display the url to the user and ask them to enter the code
        Console.WriteLine("Please open this url and sign in and copy code into console: " + url);
        Console.Write("Enter code: ");
        var code = Console.ReadLine();
        _authProvider.LoginUser(code);
    }
}
