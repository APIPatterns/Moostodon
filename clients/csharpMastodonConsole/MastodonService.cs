using MastodonClientLib;
using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

public class MastodonService {

    private MastodonClient client;

    public MastodonService()
    {
        var authProvider = new OAuth2AuthorizationProvider();
        client = new MastodonClient(new HttpClientRequestAdapter( authProvider));
    }
}

public class OAuth2AuthorizationProvider : IAuthenticationProvider
{
    public async Task AuthenticateRequestAsync(RequestInformation request, Dictionary<string, object> additionalAuthenticationContext = null, CancellationToken cancellationToken = default)
    {
        
    }
}