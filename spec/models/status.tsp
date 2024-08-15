namespace Mastodon;

model Status {
    id: string;
    uri: string;
    created_at: string;
    account: Account;
    content: string;
    visibility: string;
    sensitive: boolean;
    spoiler_text: string;
    media_attachments: MediaAttachment[];

    // Rendering attributes
    mentions: Mention[];
    tags: Tag[];
    emojis: Emoji[];

    // Information attributes
    reblogs_count: int32;
    favourites_count: int32;
    replies_count: int32;

    // Nullable attributes
    url?: string;
    in_reply_to_id?: string;
    in_reply_to_account_id?: string;
    reblog?: Status;
    poll?: Poll;
    card?: Card;
    language?: string;
    text?: string;

    // Authorized user attributes
    favourited: boolean;
    reblogged: boolean;
    muted: boolean;
    bookmarked: boolean;
    pinned: boolean;

  }

  @@doc(Status.id, "Idenfier for a status message");
  @@doc(Status.uri, "URI for a status message");
  @@doc(Status.created_at, "Date and time when the status was created");
  @@doc(Status.account, "Account that posted the status");
  @@doc(Status.content, "HTML content of the status");
  @@doc(Status.visibility, "Visibility of the status");
  @@doc(Status.sensitive, "Whether the status is marked as sensitive");
  @@doc(Status.spoiler_text, "Text to be shown as a warning before the actual content");
  @@doc(Status.media_attachments, "Media attachments for the status");
  @@doc(Status.mentions, "Mentions for the status");
  @@doc(Status.tags, "Tags for the status");


  @doc("""
  {url2}: URL of the card
  {title}: Title of the card
  {description}: Description of the card
  """)
  model Card {
    url: string;
    title: string;
    description: string;
    image: string;
  }

  

  
  @doc("""
  {id}: Id of the poll
  {expires_at}: Date and time when the poll expires
  {expired}: Whether the poll has expired
  {multiple}: Whether the poll allows multiple choices
  {votes_count}: Number of votes for the poll
  {voters_count}: Number of voters for the poll
  {options}: Options for the poll
  {emojis}: Emojis for the poll
  {voted}: Whether the authorized user has voted for the poll
  {own_votes}: Indexes of options voted for by the authorized user
  """)
  model Poll {
    id: string;
    expires_at: string;
    expired: boolean;
    multiple: boolean;
    votes_count: int32;
    voters_count: int32;
    options: PollOption[];
    emojis: Emoji[];
    voted: boolean;
    own_votes: int32[];
  }

  @doc("""
    {title}: Title of the poll option
    {votes_count}: Number of votes for the poll option
  """)
  
  model PollOption {
    title: string;
    votes_count: int32;
  }

  @doc("""
  {shortcode}: Shortcode for the emoji
  {static_url}: Static URL for the emoji
  {url}: URL for the emoji
  {visible_in_picker}: Whether the emoji is visible in the picker
  """)
  model Emoji {
    shortcode: string;
    static_url: string;
    url: string;
    visible_in_picker: boolean;
  }

  model Mention {
    id: string;
    url: string;
    username: string;
    acct: string;
  }

  
  model MediaAttachment {
    id: string;
    type: string;
    url: string;
    preview_url: string;
    remote_url: string;
    text_url: string;
    meta: MediaAttachmentMeta;
    description: string;
  }

  model MediaAttachmentMeta {
    original: MediaAttachmentMetaOriginal;
    small: MediaAttachmentMetaSmall;
  }

  model MediaAttachmentMetaOriginal {
    width: int32;
    height: int32;
    size: string;
    aspect: float32;
  }
  model MediaAttachmentMetaSmall {
    width: int32;
    height: int32;
    size: string;
    aspect: float32;
  }

  