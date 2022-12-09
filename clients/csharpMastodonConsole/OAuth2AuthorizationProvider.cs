using MastodonClientLib;
using MastodonClientLib.Models;
using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Authentication;

public class OAuth2AuthorizationProvider : IAuthenticationProvider
{
    private string ClientId { get; set; }
    private string ClientSecret { get; set; }
    private string RedirectUri { get; set; }

    public MastodonClient Client {get; set;}

    public OAuth2AuthorizationProvider(string clientId, string clientSecret, string redirectUri)
    {
        ClientId = clientId;
        ClientSecret = clientSecret;
        RedirectUri = redirectUri;
    }

    public string AccessToken { get; set; }

    private  async Task<TokenResponse> GetToken(string grantType,  string code = null)
    {
        var token = await Client.Oauth.Token.PostAsync(new TokenForm() {
            Client_id = ClientId,
            Client_secret = ClientSecret,
            Code = code,
            Redirect_uri = RedirectUri,
            Grant_type = grantType
        });
        return token;
    }

    // Get an authorization code
    public string GetUserAuthorizationnUrl(string scopes)
    {
        var request = Client.Oauth.Authorize.CreateGetRequestInformation(r => {
            r.QueryParameters.Client_id = ClientId;
            r.QueryParameters.Redirect_uri = RedirectUri;
            r.QueryParameters.Response_type = "code";
            r.QueryParameters.Scope = scopes;
        });
        return request.URI.ToString();
    }

    public async Task LoginApp() {
        var token = await GetToken("client_credentials");
        AccessToken = token.Access_token;
    }

    public async Task LoginUser(string authCode) {
        var token = await GetToken("authorization_code", authCode);
        AccessToken = token.Access_token;
    }

    public void Logout() {
        AccessToken = null;
    }
    
    public Task AuthenticateRequestAsync(RequestInformation request, Dictionary<string, object> additionalAuthenticationContext = null, CancellationToken cancellationToken = default)
    {
        request.AddHeaders(new Dictionary<string,string>{{ "Authorization", $"Bearer {AccessToken}"}});
        return Task.CompletedTask;
    }
} 

 