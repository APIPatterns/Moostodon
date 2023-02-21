import { MoostodonService } from "./MastodonService";

const service = new MoostodonService("https://mastodon.social");

service.getPublicTimeline().then((statuses) => {
    console.log(statuses);
});


