namespace Mastodon;

model Tag {
    name: string;
    url: string;
    history: HistoryItem[];
    following: boolean;
}

model HistoryItem {
    day: string;
    uses: string;
    accounts:string;
}

model FeaturedTag {
    id: string;
    name: string;
    url: string;
    statuses_count: int32;
    last_status_at: string;
  }