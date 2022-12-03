import asyncio
from moostodon_service import MoostodonService

asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

service = MoostodonService("https://mastodon.social")

# get account for a user
account = service.get_account("108192895578262114")
# show account details
print(f"Account: {account.display_name} ({account.username})")  # Currently fails due to a serialization issue

# statuses = service.get_public_statuses()  # Currently fails to a parameter mismatch on calling the API

# # print content for all the statuses
# for status in statuses:
#     print(status.content)