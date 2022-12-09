#region cancellationSource
using var cts = new CancellationTokenSource();
var cancellationToken = cts.Token;
AppDomain.CurrentDomain.ProcessExit += (sender, eArgs) => cts.Cancel();
#endregion

var mtdnService = new MastodonService("https://mastodon.social");


// Publicly available endpoints


// // Get user's account details by id
// var accounts = await mtdnService.SearchAccounts("darrel");
// // list account names
// foreach (var account in accounts.OrderBy(a => a.Followers_count))
// {
//     Console.WriteLine($"{account.Id} {account.Username} ({account.Note})");
// }

// var myaccount = await mtdnService.GetAccount("108192895578262114");

// // Write account details to console
// Console.WriteLine($"Account: {myaccount.Display_name}");

// // Read tag statuses associated to a tag
// //var statuses = await mtdnService.ReadTagTimeline("openapi");

// // read public timeline and print the first 10 statuses
// //var statuses = await mtdnService.ReadPublicTimeline();


// App endpoints
await mtdnService.LoginApp(cancellationToken);

var followers = await mtdnService.GetFollowers("108192895578262114", cancellationToken);

// User specific endpoints
//mtdnService.LoginUser("darrel_miller@mastodon.social");



// foreach (var status in statuses.Take(10))
// {
//     Console.WriteLine(status.Account.Display_name + ":" + status.Content.Substring(0, 20));
// }

