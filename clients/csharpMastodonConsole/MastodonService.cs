using System.Text;
using MastodonClientLib;
using MastodonClientLib.Models;
using MastodonClientLib.Models.V1;
using MastodonClientLib.Models.V2;
using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

public class MastodonService {

    private MastodonClient client;

    public MastodonService(string baseUrl)
    {
        var authProvider = new OAuth2AuthorizationProvider();
        var requestAdapter = new HttpClientRequestAdapter(authProvider);
        client = new MastodonClient(requestAdapter);
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

}

public class OAuth2AuthorizationProvider : IAuthenticationProvider
{
    public async Task AuthenticateRequestAsync(RequestInformation request, Dictionary<string, object> additionalAuthenticationContext = null, CancellationToken cancellationToken = default)
    {
        
    }
}