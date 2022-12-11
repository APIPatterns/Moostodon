using System.Diagnostics;
using System.Linq;
using OpenTelemetry;
using OpenTelemetry.Trace;
using Azure.Monitor.OpenTelemetry.Exporter;


namespace MoostodonConsole
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // Configure console  opentelemetry tracing
            using var provider = Sdk.CreateTracerProviderBuilder()
                .AddSource("Microsoft.Kiota.Http.HttpClientLibrary")
                .AddSource("System.Net.Http")
                .AddSource("MoostodonConsole")
                // .AddZipkinExporter(o =>
                // {
                //     o.Endpoint = new Uri("http://localhost:9411/api/v2/spans");
                // })
                //.AddAzureMonitorTraceExporter(o => o.ConnectionString = "")
                .Build();

            var activitySource = new ActivitySource("MoostodonConsole");

            var serviceUrl = args[0];
            var demo = args[1];

            using var cts = new CancellationTokenSource();
            var cancellationToken = cts.Token;
            //AppDomain.CurrentDomain.ProcessExit += (sender, eArgs) => (cts.Cancel();

            // Create a new instance of the MastodonService to access the parts of the API our apps needs
            var mtdnService = new MastodonService(serviceUrl);

            switch(demo) {

                case "publictimeline":  
                    var statuses = await mtdnService.ReadPublicTimeline(cancellationToken);
                    foreach (var s in statuses.Take(10))
                    {
                        Console.WriteLine(s.Account.Display_name + " : " + s.Content.Substring(0, Math.Min(50, s.Content.Length)));
                    }
                    break;

                case "findaccounts":
                    Console.WriteLine("Enter a search term:");
                    var searchTerm = Console.ReadLine();
                    var accounts = await mtdnService.SearchAccounts(searchTerm, cancellationToken);
                    foreach (var account in accounts.OrderBy(a => a.Followers_count))
                    {
                        Console.WriteLine($"{account.Id} {account.Username} ({account.Note})");
                    }
                    break;

                case "getaccountfollowers":
                    using (var span = activitySource.StartActivity("GetAccountFollowers", ActivityKind.Client)) {
                        
                        await mtdnService.LoginApp(cancellationToken);

                        var userAccounts = await mtdnService.SearchAccounts(CredsHack.Username, cancellationToken);
                        var userAccount = userAccounts.FirstOrDefault();
                        if (userAccount == null)
                        {
                            Console.WriteLine("No user found");
                            return;
                        }
                        var followers = await mtdnService.GetFollowers(userAccount.Id, cancellationToken);
                        foreach (var follower in followers.Take(10))
                        {
                            Console.WriteLine($"{follower.Id} {follower.Username} ({follower.Note})");
                        }
                        span.AddTag("followers", followers.Count());
                    }
                    break;

                case "getusertimeline":
                    // User specific endpoints
                    await mtdnService.LoginUser(CredsHack.Username,cancellationToken);

                    var userstatuses = await mtdnService.ReadUserTimeline(cancellationToken);
                    foreach (var s in userstatuses.Take(10))
                    {
                        Console.WriteLine(s.Account.Display_name + " : " + s.Content.Substring(0, Math.Min(20, s.Content.Length)));
                    }
                    break;

                case "toot":
                    // Post a status from a command line argument
                    await mtdnService.LoginUser(CredsHack.Username, cancellationToken);
                    Console.WriteLine("Enter a status to post: ");
                    var statusMessage = Console.ReadLine();
                    var status = await mtdnService.PostStatus(statusMessage, cancellationToken);
                    break;

                default:
                    Console.WriteLine("Unrecognized demo");
                    break;
            }
        }
    }

}

