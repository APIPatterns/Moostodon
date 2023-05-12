namespace Mastodon;

model Account {
    // Base Attributes
    id: string;
    username: string;
    acct: string;
    url: string;

    // Display Attributes
    display_name: string;
    note: string;
    avatar: string;
    avatar_static: string;
    header: string;
    header_static: string;
    locked: boolean;
    emojis: Emoji[];
    discoverable: boolean;

    // Stats
    created_at: string;
    last_status_at: string;
    statuses_count: int32;
    followers_count: int32;
    following_count: int32;

    // Optional
    moved: Account;
    fields: Field[];
    bot: boolean;
    souce: Source;
    suspended: boolean;
    mute_expires_at: string;
  }

  model Source {
    privacy: string;
    sensitive: boolean;
    language: string;
    note: string;
    fields: Field[];
    follower_requests_count: int32;
  }

  model Field {
    name: string;
    value: string;
    verified_at: string;
  }

  model FollowBody {
    reblogs: boolean;
    notify: boolean;
    lanuages: string[];
  }
  
  model Relationship {
    id: string;
    following: boolean;
    showing_reblogs: boolean;
    notifying: boolean;
    languages: string[];
    followed_by: boolean;
    blocking: boolean;
    blocked_by: boolean;
    muting: boolean;
    muting_notifications: boolean;
    requested: boolean;
    domain_blocking: boolean;
    endorsed: boolean;
    note: string;
  }
  
  model AccountList {
    id: string;
    title: string;
  }
  