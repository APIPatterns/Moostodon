import asyncio
from mastodon_service import MastodonService

asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

service = MastodonService("https://mastodon.social")


accounts = service.search_accounts("darrel")

# print the details of the discovered accounts
for account in accounts:
    print(f"Username: {account.username}")
    print(f"Display name: {account.display_name}")
    print(f"URL: {account.url}")
    print("")
