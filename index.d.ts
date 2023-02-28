/**
 * 👤 This object represents a Telegram user or bot.
 */
export interface User {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    can_join_groups?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
}

/**
 * 👥 This object represents a chat.
 */
export interface Chat {
    id: number;
    type: string;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo?: ChatPhoto;
    bio?: string;
    description?: string;
    invite_link?: string;
    pinned_message?: Message;
    permissions?: ChatPermissions;
    slow_mode_delay?: number;
    message_auto_delete_time?: number;
    sticker_set_name?: string;
    can_set_sticker_set?: boolean;
    linked_chat_id?: number;
    location?: ChatLocation;
    message_id?: number;
    connected_website?: string;
    passport_data?: any;
    proximity_alert_radius?: number;
    voice_chat_started?: boolean;
    is_closed?: boolean;
    is_member?: boolean;
    is_private?: boolean;
    can_be_reported?: boolean;
    can_be_deleted_only_for_self?: boolean;
    can_be_deleted_for_all_users?: boolean;
    can_get_members?: boolean;
    can_send_messages?: boolean;
    can_send_media_messages?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
    can_promote_members?: boolean;
}

/**
 * 💬 This object represents a message.
 */
export interface Message {
    message_id: number;
    from?: User;
    sender_chat?: Chat;
    date: number;
    chat: Chat;
    forward_from?: User;
    forward_from_chat?: Chat;
    forward_from_message_id?: number;
    forward_signature?: string;
    forward_sender_name?: string;
    forward_date?: number;
    reply_to_message?: Message;
    via_bot?: User;
    edit_date?: number;
    media_group_id?: string;
    author_signature?: string;
    text?: string;
    entities?: MessageEntity[];
    animation?: Animation;
    audio?: Audio;
    document?: Document;
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    video_note?: VideoNote;
    voice?: Voice;
    caption?: string;
    caption_entities?: MessageEntity[];
    contact?: Contact;
    dice?: Dice;
    game?: Game;
    poll?: Poll;
    venue?: Venue;
    location?: Location;
    new_chat_members?: User[];
    left_chat_member?: User;
    new_chat_title?: string;
    new_chat_photo?: PhotoSize[];
    delete_chat_photo?: boolean;
    group_chat_created?: boolean;
    supergroup_chat_created?: boolean;
    channel_chat_created?: boolean;
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: Message;
    invoice?: Invoice;
    successful_payment?: SuccessfulPayment;
    connected_website?: string;
    passport_data?: PassportData;
    proximity_alert_triggered?: ProximityAlertTriggered;
    voice_chat_started?: VoiceChatStarted;
    voice_chat_ended?: VoiceChatEnded;
    voice_chat_participants_invited?: VoiceChatParticipantsInvited;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🆔 This object represents a unique message identifier.
 */
export interface MessageId {
    message_id: number;
}

/**
 * 📎 This object represents one special entity in a text message.
 */
export interface MessageEntity {
    type: string;
    offset: number;
    length: number;
    url?: string;
    user?: User;
    language?: string;
}

/**
 * 🖼️ This object represents one size of a photo or a file / sticker thumbnail.
 */
export interface PhotoSize {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size?: number;
}

/**
 * 🎞️ This object represents an animation file.
 */
export interface Animation {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumb?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}

/**
 * 🔉 This object represents an audio file.
 */
export interface Audio {
    file_id: string;
    file_unique_id: string;
    duration: number;
    performer?: string;
    title?: string;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    thumb?: PhotoSize;
    caption?: string;
    caption_entities?: MessageEntity[];
    performer_url?: string;
    audio_url?: string;
    audio_duration?: number;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 📎 This object represents a general file (as opposed to photos, voice messages and audio files).
 */
export interface Document {
    file_id: string;
    file_unique_id: string;
    thumb?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    caption?: string;
    caption_entities?: MessageEntity[];
    reply_to_message?: Message;
    via_bot?: User;
    date?: number;
    animation?: Animation;
    audio?: Audio;
    document?: Document;
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    video_note?: VideoNote;
    voice?: Voice;
    chat?: Chat;
    from?: User;
    forward_from?: User;
    forward_from_chat?: Chat;
    forward_from_message_id?: number;
    forward_signature?: string;
    forward_sender_name?: string;
    forward_date?: number;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 📹 This object represents a video file.
 */
export interface Video {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumb?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    caption?: string;
    caption_entities?: MessageEntity[];
    supports_streaming?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🎥 This object represents a video message (available in Telegram apps as of v.4.0).
 */
export interface VideoNote {
    file_id: string;
    file_unique_id: string;
    length: number;
    duration: number;
    thumb?: PhotoSize;
    file_size?: number;
}

/**
 * 🎤 This object represents a voice note.
 */
export interface Voice {
    file_id: string;
    file_unique_id: string;
    duration: number;
    mime_type?: string;
    file_size?: number;
    caption?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 👥 This object represents a contact to be shared.
 */
export interface Contact {
    phone_number: string;
    first_name: string;
    last_name?: string;
    user_id?: number;
    vcard?: string;
}

/**
 * 🎲 This object represents an animated emoji that displays a random value.
 */
export interface Dice {
    emoji: string;
    value: number;
}

/**
 * 🔵 This object contains information about one answer option in a poll.
 */
export interface PollOption {
    text: string;
    voter_count: number;
}

/**
 * 🗳️ This object contains information about a poll.
 */
export interface Poll {
    id: string;
    question: string;
    options: PollOption[];
    is_closed: boolean;
    total_voter_count: number;
    is_anonymous: boolean;
    type: string;
    allows_multiple_answers: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
}

/**
 * 🌍 This object represents a point on the map.
 */
export interface Location {
    longitude: number;
    latitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
}

/**
 * 🏢 This object represents a venue.
 */
export interface Venue {
    location: Location;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
}

/**
 * 🌐 This object represents data for a Telegram Passport element to be shared by users.
 */
export interface WebAppData {
    domain: string;
    bot_user_id: number;
    data: string;
}

/**
 * 🔔 This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 */
export interface ProximityAlertTriggered {
    traveler: User;
    watcher: User;
    distance: number;
}

/**
 * ⏰ This object represents a service message about a change in auto-delete timer settings.
 */
export interface MessageAutoDeleteTimerChanged {
    message_auto_delete_time: number;
}

/**
 * 📝 This object represents a newly created forum topic.
 */
export interface ForumTopicCreated {
    topic: ForumTopic;
}

/**
 * 📝 This object represents a forum topic that has been closed.
 */
export interface ForumTopicClosed {
    topic: ForumTopic;
}

/**
 * 📝 This object represents a forum topic that has been edited.
 */
export interface ForumTopicEdited {
    topic: ForumTopic;
}

/**
 * 📝 This object represents a forum topic that has been reopened.
 */
export interface ForumTopicReopened {
    topic: ForumTopic;
}

/**
 * 📝 This object represents a forum topic that has been hidden from view.
 */
export interface GeneralForumTopicHidden {
    topic: ForumTopic;
}

/**
 * 📝 This object represents a forum topic that has been made visible.
 */
export interface GeneralForumTopicUnhidden {
    topic: ForumTopic;
}

/**
 * 🔄 This object represents a user sharing a chat.
 */
export interface UserShared {
    from: User;
    chat: Chat;
    date: number;
}

/**
 * 🔄 This object represents a chat being shared.
 */
export interface ChatShared {
    from: User;
    chat: Chat;
    date: number;
}

/**
 * ✍️ This object represents a user granted permission to change the chat title, photo and other settings.
 */
export interface WriteAccessAllowed {
    is_anonymous: boolean;
    chat_id: number;
    invite_link: string;
}

/**
 * 📆 This object represents a scheduled group video chat.
 */
export interface VideoChatScheduled {
    start_date: number;
    title: string;
    chat: Chat;
    recurrence?: string;
    description?: string;
}

/**
 * 📹 This object represents a started group video chat.
 */
export interface VideoChatStarted {
    group_chat_id: number;
    title: string;
    duration: number;
}

/**
 * 📹 This object represents an ended group video chat.
 */
export interface VideoChatEnded {
    group_chat_id: number;
    title: string;
    duration: number;
}

/**
 * 📹 This object represents a group video chat participant being invited.
 */
export interface VideoChatParticipantsInvited {
    group_chat_id: number;
    title: string;
    participants: User[];
}

/**
 * 👤 This object represents a user's profile pictures.
 */
export interface UserProfilePhotos {
    total_count: number;
    photos: PhotoSize[][];
}

/**
 * 📄 This object represents a file ready to be downloaded.
 */
export interface File {
    file_id: string;
    file_unique_id: string;
    file_size?: number;
    file_path?: string;
}

/**
 * 📢 This object represents information about a Telegram bot.
 */
export interface WebAppInfo {
    id: number;
    name: string;
    username: string;
    description: string;
    auth_url?: string;
    domains?: string[];
    commands?: BotCommand[];
    main_page_description?: string;
    main_page_photo?: PhotoSize[];
    main_page_video?: VideoNote;
}

/**
 * 🎹 This object represents a custom keyboard with reply options.
 */
export interface ReplyKeyboardMarkup {
    keyboard: KeyboardButton[][];
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
    selective?: boolean;
}

/**
 * 🎹 This object represents one button of the reply keyboard.
 */
export interface KeyboardButton {
    text: string;
    request_contact?: boolean;
    request_location?: boolean;
    request_poll?: KeyboardButtonPollType;
}

/**
 * 🎹 This object represents a request for a poll to be sent instead of the original message.
 */
export interface KeyboardButtonPollType {
    type?: string;
}

/**
 * 🎹 This object represents the removal of a custom keyboard.
 */
export interface ReplyKeyboardRemove {
    remove_keyboard: true;
    selective?: boolean;
}

/**
 * 🔘 This object represents an inline keyboard that appears right next to the message it belongs to.
 */
export interface InlineKeyboardMarkup {
    inline_keyboard: InlineKeyboardButton[][];
}

/**
 * 🔘 This object represents one button of an inline keyboard.
 */
export interface InlineKeyboardButton {
    text: string;
    url?: string;
    login_url?: LoginUrl;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    callback_game?: CallbackGame;
    pay?: boolean;
}

/**
 * 🔑 This object represents a parameter of the inline keyboard button used to automatically authorize a user.
 */
export interface LoginUrl {
    url: string;
    forward_text?: string;
    bot_username?: string;
    request_write_access?: boolean;
}

/**
 * 🔘 This object represents a callback query from an inline keyboard.
 */
export interface CallbackQuery {
    id: string;
    from: User;
    message?: Message;
    inline_message_id?: string;
    chat_instance: string;
    data?: string;
    game_short_name?: string;
}

/**
 * 🎹 This object represents a placeholder message sent to notify the user that a reply is needed in a private chat.
 */
export interface ForceReply {
    force_reply: true;
    selective?: boolean;
}

/**
 * 🖼️ This object represents a chat photo.
 */
export interface ChatPhoto {
    small_file_id: string;
    small_file_unique_id: string;
    big_file_id: string;
    big_file_unique_id: string;
}

/**
 * 🔗 This object represents an invite link for a chat.
 */
export interface ChatInviteLink {
    invite_link: string;
    creator?: User;
    is_primary?: boolean;
    is_revoked?: boolean;
    expire_date?: number;
    member_limit?: number;
}

/**
 * 🔑 This object describes the rights of a chat member.
 */
export interface ChatAdministratorRights {
    can_be_edited?: boolean;
    can_change_info?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_delete_messages?: boolean;
    can_invite_users?: boolean;
    can_restrict_members?: boolean;
    can_pin_messages?: boolean;
    can_promote_members?: boolean;
    can_manage_chat?: boolean;
    can_manage_voice_chats?: boolean;
    can_manage_invites?: boolean;
    can_manage_chat_users?: boolean;
}

/**
 * 👥 This object represents a chat member.
 */
export interface ChatMember {
    user: User;
    status: string;
    custom_title?: string;
    is_anonymous?: boolean;
    until_date?: number;
    can_be_edited?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_delete_messages?: boolean;
    can_restrict_members?: boolean;
    can_promote_members?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
    is_member?: boolean;
    can_send_messages?: boolean;
    can_send_media_messages?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_send_inline_queries?: boolean;
    can_edit_messages_before_send?: boolean;
    message_auto_delete_time?: number;
    sticker_set_name?: string;
    bot_info?: BotInfo;
}

/**
 * 👥 This object represents an owner chat member.
 */
export interface ChatMemberOwner extends ChatMember {
    is_anonymous: false;
    status: 'creator';
}

/**
 * 👥 This object represents an administrator chat member.
 */
export interface ChatMemberAdministrator extends ChatMember {
    status: 'administrator';
}

/**
 * 👥 This object represents a normal chat member.
 */
export interface ChatMemberMember extends ChatMember {
    status: 'member';
}

/**
 * 👥 This object represents a restricted chat member.
 */
export interface ChatMemberRestricted extends ChatMember {
    status: 'restricted';
    can_send_messages: boolean;
    can_send_media_messages: boolean;
    can_send_polls: boolean;
    can_send_other_messages: boolean;
    can_add_web_page_previews: boolean;
    until_date: number;
}

/**
 * 👥 This object represents a former chat member.
 */
export interface ChatMemberLeft extends ChatMember {
    status: 'left';
}

/**
 * 👥 This object represents a banned chat member.
 */
export interface ChatMemberBanned extends ChatMember {
    status: 'kicked';
    until_date: number;
}

/**
 * 👥 This object represents changes in the status of a chat member.
 */
export interface ChatMemberUpdated {
    chat: Chat;
    from: User;
    date: number;
    old_chat_member: ChatMember;
    new_chat_member: ChatMember;
}

/**
 * 👥 This object represents a request to join a chat.
 */
export interface ChatJoinRequest {
    user: User;
    chat: Chat;
    date: number;
    invite_link?: ChatInviteLink;
}

/**
 * 🔑 This object represents the permissions granted to a user for a chat.
 */
export interface ChatPermissions {
    can_send_messages?: boolean;
    can_send_media_messages?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
}

/**
 * 📝 This object represents a forum topic.
 */
export interface ForumTopic {
    id: string;
    title: string;
    forum_id: string;
    author_user_id: number;
    reply_count: number;
    created_at: number;
    updated_at: number;
    is_closed: boolean;
    is_pinned: boolean;
    is_deleted: boolean;
    is_unread: boolean;
    comment_ids: string[];
    chat_ids: number[];
    user_ids: number[];
}

/**
 * 🤖 This object represents a bot command.
 */
export interface BotCommand {
    command: string;
    description: string;
}

/**
 * 🔑 This object represents the scope of bot commands.
 */
export interface BotCommandScope {
    type: string;
}

/**
 * 🔑 This object represents the default scope of bot commands.
 */
export interface BotCommandScopeDefault extends BotCommandScope {
    type: 'default';
}

/**
 * 🔑 This object represents the scope of bot commands for all private chats.
 */
export interface BotCommandScopeAllPrivateChats extends BotCommandScope {
    type: 'all_private_chats';
}

/**
 * 🔑 This object represents the scope of bot commands for all group and supergroup chats.
 */
export interface BotCommandScopeAllGroupChats extends BotCommandScope {
    type: 'all_group_chats';
}

/**
 * 🔑 This object represents the scope of bot commands for all chat administrators.
 */
export interface BotCommandScopeAllChatAdministrators extends BotCommandScope {
    type: 'all_chat_administrators';
}

/**
 * 🔑 This object represents the scope of bot commands for a specific chat.
 */
export interface BotCommandScopeChat extends BotCommandScope {
    type: 'chat';
    chat_id: number;
}

/**
 * 🔑 This object represents the scope of bot commands for chat administrators in a specific chat.
 */
export interface BotCommandScopeChatAdministrators extends BotCommandScope {
    type: 'chat_administrators';
    chat_id: number;
}

/**
 * 🔑 This object represents the scope of bot commands for a specific chat member.
 */
export interface BotCommandScopeChatMember extends BotCommandScope {
    type: 'chat_member';
    chat_id: number;
    user_id: number;
}

/**
 * 📇 This object represents a menu button.
 */
export interface MenuButton {
    text: string;
    commands?: MenuButtonCommands;
    web_app?: MenuButtonWebApp;
    type?: MenuButtonDefault;
}

/**
 * 📇 This object represents a menu button with commands.
 */
export interface MenuButtonCommands {
    commands: BotCommand[];
    state?: string;
}

/**
 * 📇 This object represents a menu button that opens a Telegram web app.
 */
export interface MenuButtonWebApp {
    url: string;
    web_app_id?: number;
    menu_buttons?: MenuButton[][];
}

/**
 * 📇 This object represents a default menu button.
 */
export interface MenuButtonDefault {
    type: 'default';
}

/**
 * 🔑 This object represents additional options for a message.
 */
export interface ResponseParameters {
    migrate_to_chat_id?: number;
    retry_after?: number;
}

/**
 * 🖼️ This object represents the content of a media message to be sent.
 */
export interface InputMedia {
    type: string;
    media: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    duration?: number;
    width?: number;
    height?: number;
    supports_streaming?: boolean;
}

/**
 * 🖼️ This object represents the content of a photo message to be sent.
 */
export interface InputMediaPhoto extends InputMedia {
    type: 'photo';
}

/**
 * 📹 This object represents the content of a video message to be sent.
 */
export interface InputMediaVideo extends InputMedia {
    type: 'video';
    thumb?: InputFile;
    disable_audio?: boolean;
}

/**
 * 🎞️ This object represents the content of an animation message to be sent.
 */
export interface InputMediaAnimation extends InputMedia {
    type: 'animation';
    thumb?: InputFile;
    width?: number;
    height?: number;
    duration?: number;
}

/**
 * 🎵 This object represents the content of an audio message to be sent.
 */
export interface InputMediaAudio extends InputMedia {
    type: 'audio';
    thumb?: InputFile;
    duration?: number;
    performer?: string;
    title?: string;
}

/**
 * 📎 This object represents the content of a general file message to be sent.
 */
export interface InputMediaDocument extends InputMedia {
    type: 'document';
    thumb?: InputFile;
}

/**
 * 📎 This object represents the content of a file to be uploaded.
 */
export interface InputFile {
    file: string | Buffer;
    filename?: string;
    contentType?: string;
}

/**
 * 📍 This object represents a location to which a chat is connected.
 */
export interface ChatLocation {
    location: Location;
    address: string;
}

/**
 * 🎴 This object represents a sticker.
 */
export interface Sticker {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    is_animated: boolean;
    thumb?: PhotoSize;
    emoji?: string;
    set_name?: string;
    mask_position?: MaskPosition;
    file_size?: number;
}

/**
 * 🎴 This object describes the position on faces where a mask should be placed by default.
 */
export interface MaskPosition {
    point: string;
    x_shift: number;
    y_shift: number;
    scale: number;
}

/**
 * 🎮 This object represents a game.
 */
export interface Game {
    title: string;
    description: string;
    photo: PhotoSize[];
    text?: string;
    text_entities?: MessageEntity[];
    animation?: Animation;
}

/**
 * 📝 This object contains basic information about an invoice.
 */
export interface Invoice {
    title: string;
    description: string;
    start_parameter: string;
    currency: string;
    total_amount: number;
}

/**
 * 📝 This object contains basic information about a successful payment.
 */
export interface SuccessfulPayment {
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
}

/**
 * 📝 This object represents information about an order.
 */
export interface OrderInfo {
    name?: string;
    phone_number?: string;
    email?: string;
    shipping_address?: ShippingAddress;
}

/**
 * 📝 This object represents a shipping address.
 */
export interface ShippingAddress {
    country_code: string;
    state: string;
    city: string;
    street_line1: string;
    street_line2: string;
    post_code: string;
}

/**
 * 📝 This object represents data required for decrypting and authenticating `EncryptedPassportElement`.
 */

export interface PassportData {
    data: EncryptedPassportElement[];
    credentials: EncryptedCredentials;
}

/**
 * 📝 This object contains information about documents or other Telegram Passport elements shared with the bot by the user.
 */
export interface EncryptedPassportElement {
    type: string;
    data?: string;
    phone_number?: string;
    email?: string;
    files?: PassportFile[];
    front_side?: PassportFile;
    reverse_side?: PassportFile;
    selfie?: PassportFile;
    translation?: PassportFile[];
    hash: string;
}

/**
 * 📝 This object represents a file uploaded to Telegram Passport.
 */
export interface PassportFile {
    file_id: string;
    file_unique_id: string;
    file_size: number;
    file_date: number;
}

/**
 * 📝 This object represents the credentials required to decrypt the data.
 */
export interface EncryptedCredentials {
    data: string;
    hash: string;
    secret: string;
}

/**
 * 📢 This object represents a service message about a voice chat started in the chat.
 */
export interface VoiceChatStarted {
    voice_chat_started: VoiceChatStarted;
}

/**
 * 📢 This object represents a service message about a voice chat ended in the chat.
 */
export interface VoiceChatEnded {
    voice_chat_ended: VoiceChatEnded;
}

/**
 * 📢 This object represents a service message about new members invited to a voice chat.
 */
export interface VoiceChatParticipantsInvited {
    voice_chat_participants_invited: VoiceChatParticipantsInvited;
}

/**
 * 🎮 This object represents a game.
 */
export interface CallbackGame {
    callback_game: CallbackGame;
}

/**
 * 🤖 This object represents information about a bot and its supported commands.
 */
export interface BotInfo {
    description: string;
    commands: BotCommand[];
}
