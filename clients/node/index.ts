import { MoostodonService } from "./MoostodonService";

const service = new MoostodonService("https://mastodon.social");

//Get Account by id
service.getAccount("108192895578262114").then((account) => {
    console.log(account?.username);
});


service.getPublicTimeline().then((statuses) => {
    console.log(statuses);
});
