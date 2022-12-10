using System.Linq;
using OpenTelemetry;
using OpenTelemetry.Trace;

namespace MoostodonConsole
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // Configure console  opentelemetry tracing
            var builder = Sdk.CreateTracerProviderBuilder()
                .AddSource("Microsoft.Kiota.Http.HttpClientLibrary")
                .AddConsoleExporter();


            var serviceUrl = args[0];
            var demo = args[1];

            using var cts = new CancellationTokenSource();
            var cancellationToken = cts.Token;
            //AppDomain.CurrentDomain.ProcessExit += (sender, eArgs) => (ifcts.Cancel();

            // Create a new instance of the MastodonService to access the parts of the API our apps needs
            var mtdnService = new MastodonService(serviceUrl);

            switch(demo) {

                case "publictimeline":  
                    var statuses = await mtdnService.ReadPublicTimeline(cancellationToken);
                    foreach (var s in statuses.Take(10))
                    {
                        Console.WriteLine(s.Account.Display_name + " : " + s.Content.Substring(0, Math.Min(20, s.Content.Length)));
                    }
                    break;

                case "findaccounts":
                    var accounts = await mtdnService.SearchAccounts("darrel", cancellationToken);
                    foreach (var account in accounts.OrderBy(a => a.Followers_count))
                    {
                        Console.WriteLine($"{account.Id} {account.Username} ({account.Note})");
                    }
                    break;

                case "getaccountfollowers":
                    // App endpoints
                    await mtdnService.LoginApp(cancellationToken);

                    var followers = await mtdnService.GetFollowers("108192895578262114", cancellationToken);
                    foreach (var follower in followers.Take(10))
                    {
                        Console.WriteLine($"{follower.Id} {follower.Username} ({follower.Note})");
                    }
                    break;

                case "getusertimeline":
                    // User specific endpoints
                    await mtdnService.LoginUser("@darrel_miller.mastodon.social",cancellationToken);

                    var userstatuses = await mtdnService.ReadUserTimeline(cancellationToken);
                    foreach (var s in userstatuses.Take(10))
                    {
                        Console.WriteLine(s.Account.Display_name + " : " + s.Content.Substring(0, Math.Min(20, s.Content.Length)));
                    }
                    break;

                case "toot":
                
                    break;

            }


            // Publicly available endpoints

            // var myaccount = await mtdnService.GetAccount("108192895578262114");

            // // Write account details to console
            // Console.WriteLine($"Account: {myaccount.Display_name}");


        }

    }

}




// // Get user's account details by id
// var accounts = await mtdnService.SearchAccounts("darrel");
// // list account names
// foreach (var account in accounts.OrderBy(a => a.Followers_count))
// {
//     Console.WriteLine($"{account.Id} {account.Username} ({account.Note})");
// }



// // Read tag statuses associated to a tag
// //var statuses = await mtdnService.ReadTagTimeline("openapi");

// // read public timeline and print the first 10 statuses
// //var statuses = await mtdnService.ReadPublicTimeline();



// User specific endpoints
//mtdnService.LoginUser("darrel_miller@mastodon.social");



// foreach (var status in statuses.Take(10))
// {
//     Console.WriteLine(status.Account.Display_name + ":" + status.Content.Substring(0, 20));
// }

