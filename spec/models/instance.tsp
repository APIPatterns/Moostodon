namespace Mastodon;

model Instance {
    domain: string;
    title: string;
    version: string;
    source_url: string;
    description: string;
    usage: Usage;
    thumbnail: Thumbnail;
    languages: string[];
    configuration: Configuration;
    registrations: Registrations;
    contact: Contact;
    rules: Rule[];

}
model Rule {
    id: string;
    text: string;
}

model Contact {
    email: string;
    account: Account;
}

model Registrations {
    enabled: boolean;
    approval_required: boolean;
    message: string;
}

model Configuration {
    urls: ConfigurationUrls;
    accounts: ConfigurationAccounts;
    statuses: ConfigurationStatuses;
    media_attachments: ConfigurationMediaAttachments;
    polls: ConfigurationPolls;
    translation: ConfigurationTranslation;
}
model ConfigurationUrls {
    streaming_api: string;
}

model ConfigurationAccounts {
    max_feature_tags: int32;
}

model ConfigurationStatuses {
    max_characters: int32;
    max_media_attachments: int32;
    characters_reserved_per_url: int32;
}

model ConfigurationMediaAttachments {
    image_size_limit: int32;
    supported_mime_types: string[];
    image_matrix_limit: int32;
    video_size_limit: int32;
    video_matrix_limit: int32;
}

model ConfigurationPolls {
    max_options: int32;
    max_characters_per_option: int32;
    min_expiration: int32;
    max_expiration: int32;
}

model ConfigurationTranslation {
    enabled: boolean;
}

model Thumbnail {
    url: string;
    blurhash: string;
    versions: ThumnailVersion;
}

model ThumnailVersion {
    @friendlyName("OneX")
    "@1x": string;
    @friendlyName("TwoX")
    "@2x": string;
}

model Usage {
    users: UserUsage;
    local_posts: int64;
    federation: FederationUsage;
}

model UserUsage {
    total: int64;
    active_halfyear: int64;
    active_month: int64;
}

model FederationUsage {
    active: int64;
    receiving: int64;
    sending: int64;
}
