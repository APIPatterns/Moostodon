using MastodonClientLib;
using MastodonClientLib.Models;
using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Authentication;

public class OAuth2AuthProvider : IAuthenticationProvider
{
    private string ClientId { get; set; }
    private string ClientSecret { get; set; }
    private string RedirectUri { get; set; }

    public MastodonClient Client {get; set;}

    private string BaseUrl { get; set; }
    public OAuth2AuthProvider(string clientId, string clientSecret, string redirectUri, string baseUrl )
    {
        BaseUrl = baseUrl;
        ClientId = clientId;
        ClientSecret = clientSecret;
        RedirectUri = redirectUri;
    }

    public string AccessToken { get; set; }

    private  async Task<TokenResponse> GetToken(string grantType, string code = null, CancellationToken cancellationToken = default)
    {
        var token = await Client.Oauth.Token.PostAsync(new TokenForm() {
            ClientId = ClientId,
            ClientSecret = ClientSecret,
            Code = code,
            RedirectUri = RedirectUri,
            GrantType = grantType
        }, cancellationToken: cancellationToken);
        return token;
    }

    // Get an authorization code
    public string GetUserAuthorizationUrl(string scopes)
    {
        var request = Client.Oauth.Authorize.ToGetRequestInformation(r => {
            r.QueryParameters.Client_id = ClientId;
            r.QueryParameters.Redirect_uri = RedirectUri;
            r.QueryParameters.Response_type = "code";
            r.QueryParameters.Scope = scopes;
        });
        return request.URI.AbsoluteUri;
    }

    public async Task LoginApp(CancellationToken cancellationToken = default) {
        var token = await GetToken("client_credentials", cancellationToken: cancellationToken);
        AccessToken = token.AccessToken;
    }

    public async Task LoginUser(string authCode, CancellationToken cancellationToken = default) {
        var token = await GetToken("authorization_code", authCode, cancellationToken: cancellationToken);
        AccessToken = token.AccessToken;
    }

    public void Logout() {
        AccessToken = null;
    }
    
    public Task AuthenticateRequestAsync(RequestInformation request, Dictionary<string, object> additionalAuthenticationContext = null, CancellationToken cancellationToken = default)
    {
        request.AddHeaders(new RequestHeaders {{ "Authorization", $"Bearer {AccessToken}"}});
        return Task.CompletedTask;
    }
} 

 