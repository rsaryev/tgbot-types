import {
    ForceReply,
    InlineKeyboardMarkup,
    InputFile,
    ReplyKeyboardMarkup,
    ReplyKeyboardRemove,
    MessageEntity,
    InputMedia,
    BotCommandScope,
    BotCommand,
    KeyboardButton,
    ChatPermissions,
    CallbackGame
} from "./types";

/**
 * 👤 A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 */
interface getMe {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    can_join_groups: boolean;
    can_read_all_group_messages: boolean;
    supports_inline_queries: boolean;
}

/**
 * 🚪 Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success.
 */
interface logOut {
    ok: boolean;
}

/**
 * 🚪 Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched.
 */
interface close {
    ok: boolean;
}

/**
 * 💬 Use this method to send text messages. On success, the sent Message is returned.
 */
interface sendMessage {
    chat_id: number | string;
    text: string;
    parse_mode?: string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 💬 Use this method to format text messages. You can use this method to add bold, italic, fixed-width, inline URLs, clickable buttons, and other formatting options to your messages. On success, the formatted text is returned.
 */
interface FormatMessage {
    text: string;
    parse_mode: string;
    entities?: MessageEntity[];
}

/**
 * 💬 Use this method to forward messages of any kind. On success, the sent Message is returned.
 */
interface forwardMessage {
    chat_id: number | string;
    from_chat_id: number | string;
    disable_notification?: boolean;
    message_id: number;
}

/**
 * 💬 Use this method to copy messages of any kind. On success, the MessageId of the sent copy is returned.
 */
interface copyMessage {
    chat_id: number | string;
    from_chat_id: number | string;
    message_id: number;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🖼️ Use this method to send photos. On success, the sent Message is returned.
 */
interface sendPhoto {
    chat_id: number | string;
    photo: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🎧 Use this method to send audio files. On success, the sent Message is returned.
 */
interface sendAudio {
    chat_id: number | string;
    audio: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    duration?: number;
    performer?: string;
    title?: string;
    thumb?: InputFile | string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 📁 Use this method to send general files. On success, the sent Message is returned.
 */
interface sendDocument {
    chat_id: number | string;
    document: InputFile | string;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_content_type_detection?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🎥 Use this method to send video files. On success, the sent Message is returned.
 */
interface sendVideo {
    chat_id: number | string;
    video: InputFile | string;
    duration?: number;
    width?: number;
    height?: number;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    supports_streaming?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🎞️ Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned.
 */
interface sendAnimation {
    chat_id: number | string;
    animation: InputFile | string;
    duration?: number;
    width?: number;
    height?: number;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🎤 Use this method to send audio files that are not supported by Telegram, such as audio from unsupported formats or audio messages with duration greater than 1 minute. On success, the sent Message is returned.
 */
interface sendVoice {
    chat_id: number | string;
    voice: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    duration?: number;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🎥 Use this method to send rounded square videos of upto 1 minute long. On success, the sent Message is returned.
 */
interface sendVideoNote {
    chat_id: number | string;
    video_note: InputFile | string;
    duration?: number;
    length?: number;
    thumb?: InputFile | string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🎭 Use this method to send a group of photos or videos as an album. On success, an array of the sent Messages is returned.
 */
interface sendMediaGroup {
    chat_id: number | string;
    media: InputMedia[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
}

/**
 * 📍 Use this method to send a point on the map. On success, the sent Message is returned.
 */
interface sendLocation {
    chat_id: number | string;
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🗺️ Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message was sent by the bot, the edited Message is returned; otherwise, True is returned.
 */
interface editMessageLiveLocation {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 🛑 Use this method to stop updating a live location message before live_period expires. On success, if the message was sent by the bot, the sent Message is returned; otherwise, True is returned.
 */
interface stopMessageLiveLocation {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 📍 Use this method to send information about a venue. On success, the sent Message is returned.
 */
interface sendVenue {
    chat_id: number | string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 📞 Use this method to send phone contacts. On success, the sent Message is returned.
 */
interface sendContact {
    chat_id: number | string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 📊 Use this method to send a native poll. On success, the sent Message is returned.
 */
interface sendPoll {
    chat_id: number | string;
    question: string;
    options: string[];
    is_anonymous?: boolean;
    type?: string;
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_parse_mode?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
    is_closed?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 🎲 Use this method to send a dice, which will have a random value from 1 to 6. On success, the sent Message is returned.
 */
interface sendDice {
    chat_id: number | string;
    emoji?: string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * 🕐 Use this method when you need to tell the user that something is happening on the bot
 */
interface sendChatAction {
    chat_id: number | string;
    action: string;
}

/**
 * 📷 Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
 */
interface getUserProfilePhotos {
    user_id: number;
    offset?: number;
    limit?: number;
}

/**
 * 📁 Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. Returns a File object.
 */
interface getFile {
    file_id: string;
}

/**
 * 👞 Use this method to ban a user from a chat. Returns True on success.
 */
interface banChatMember {
    chat_id: number | string;
    user_id: number;
    until_date?: number;
    revoke_messages?: boolean;
}

/**
 * 🚫 Use this method to unban a previously banned user in a supergroup or channel. Returns True on success.
 */
interface unbanChatMember {
    chat_id: number | string;
    user_id: number;
    only_if_banned?: boolean;
}

/**
 * 🔒 Use this method to restrict a user in a supergroup. Returns True on success.
 */
interface restrictChatMember {
    chat_id: number | string;
    user_id: number;
    permissions: ChatPermissions;
    until_date?: number;
}

/**
 * 👑 Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface promoteChatMember {
    chat_id: number | string;
    user_id: number;
    is_anonymous?: boolean;
    can_change_info?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_delete_messages?: boolean;
    can_invite_users?: boolean;
    can_restrict_members?: boolean;
    can_pin_messages?: boolean;
    can_promote_members?: boolean;
}

/**
 * 🔖 Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 */
interface setChatAdministratorCustomTitle {
    chat_id: number | string;
    user_id: number;
    custom_title: string;
}

/**
 * 🚪 Use this method to ban a user and delete all messages from a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface banChatSenderChat {
    chat_id: number | string;
    user_id: number;
    revoke_messages?: boolean;
}

/**
 * 🚪 Use this method to unban a user and delete all messages from a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface unbanChatSenderChat {
    chat_id: number | string;
    user_id: number;
}

/**
 * 🔒 Use this method to set default chat permissions for all members. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatPermissions {
    chat_id: number | string;
    permissions: ChatPermissions;
}

/**
 * 🔗 Use this method to generate a new primary invite link for a chat. Any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as a ChatInviteLink object.
 */
interface exportChatInviteLink {
    chat_id: number | string;
}

/**
 * 🔗 Use this method
 */
interface createChatInviteLink {
    chat_id: number | string;
    expire_date?: number;
    member_limit?: number;
}

/**
 * 🔗 Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the edited invite link as a ChatInviteLink object.
 */
interface editChatInviteLink {
    chat_id: number | string;
    invite_link: string;
    expire_date?: number;
    member_limit?: number;
}

/**
 * 🔗 Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the revoked invite link as a ChatInviteLink object.
 */
interface revokeChatInviteLink {
    chat_id: number | string;
    invite_link: string;
}

/**
 * 🆕 Use this method to approve a member's join request to a public or private chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface approveChatJoinRequest {
    chat_id: number | string;
    user_id: number;
}

/**
 * 🚪 Use this method to decline a user's join request to a public or private chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface declineChatJoinRequest {
    chat_id: number | string;
    user_id: number;
    reason?: string;
}

/**
 * 🌄 Use this method to set the photo of a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatPhoto {
    chat_id: number | string;
    photo: InputFile | string;
}

/**
 * 🌄 Use this method to delete a chat photo. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface deleteChatPhoto {
    chat_id: number | string;
}

/**
 * 📝 Use this method to change the title of a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatTitle {
    chat_id: number | string;
    title: string;
}

/**
 * 📝 Use this method to change the description of a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatDescription {
    chat_id: number | string;
    description?: string;
}

/**
 * 📌 Use this method to pin a message in a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface pinChatMessage {
    chat_id: number | string;
    message_id: number;
    disable_notification?: boolean;
}

/**
 * 📌 Use this method to unpin a message in a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface unpinChatMessage {
    chat_id: number | string;
}

/**
 * 📌 Use this method to unpin all messages in a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface unpinAllChat {
    chat_id: number | string;
}

interface unpinAllChatMessages {
    chat_id: number | string;
}

/**
 * 🚪 Use this method to leave a group, supergroup or channel. Returns True on success.
 */
interface leaveChat {
    chat_id: number | string;
}

/**
 * 🔍 Use this method to get information about a chat. Returns a Chat object on success.
 */
interface getChat {
    chat_id: number | string;
}

/**
 * 👑 Use this method to get a list of administrators in a chat. On success, returns an Array of ChatMember objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
 */
interface getChatAdministrators {
    chat_id: number | string;
}

/**
 * 👥 Use this method to get the number of members in a chat. Returns Int on success.
 */
interface getChatMemberCount {
    chat_id: number | string;
}

/**
 * 👥 Use this method to get information about a member of a chat. Returns a ChatMember object on success.
 */
interface getChatMember {
    chat_id: number | string;
    user_id: number;
}

/**
 * 🎭 Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatStickerSet {
    chat_id: number | string;
    sticker_set_name: string;
}

/**
 * 🎭 Use this method to delete the group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface deleteChatStickerSet {
    chat_id: number | string;
}

/**
 * 🎭 Use this method to get a list of sticker sets for a given target scope. Returns an Array of StickerSet objects on success.
 */
interface getChatStickerSet {
    chat_id: number | string;
}

/**
 * 📢 Use this method to get a list of available and unavailable Telegram Passport elements. Returns an Array of PassportElementError objects on success.
 */
interface getPassportElementErrors {
    user_id: number;
}

/**
 * 🔗 Use this method to set a chat menu button for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatMenuButton {
    chat_id: number | string;
    text: string;
    url?: string;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    callback_game?: CallbackGame;
    pay?: boolean;
}

/**
 * 🔒 Use this method to set default chat permissions for all members. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setMyDefaultAdministratorRights {
    permissions: ChatPermissions;
}

/**
 * 💬 Use this method to get a list of the bot's commands. Requires no parameters. Returns an Array of BotCommand on success.
 */
interface getMyCommands {
}

/**
 * 💬 Use this method to change the list of the bot's commands. Returns True on success.
 */
interface setMyCommands {
    commands: BotCommand[];
}

/**
 * 💬 Use this method to delete the list of the bot's commands for the given scope and user language. Returns True on success.
 */
interface deleteMyCommands {
    scope?: BotCommandScope;
    language_code?: string;
}

/**
 * 📢 Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand on success.
 */
interface getMyCommands {
    scope?: BotCommandScope;
    language_code?: string;
}

/**
 * 📊 Use this method to send a native poll. Returns the sent Message on success.
 */
interface sendPoll {
    chat_id: number | string;
    question: string;
    options: string[];
    is_anonymous?: boolean;
    type?: string;
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_parse_mode?: string;
    open_period?: number;
    close_date?: number;
    is_closed?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 💬 Use this method to send a chat action. Returns True on success.
 */
interface sendChatAction {
    chat_id: number | string;
    action: string;
}

/**
 * 📷 Use this method to get a user's profile pictures. Returns a UserProfilePhotos object on success.
 */
interface getUserProfilePhotos {
    user_id: number;
    offset?: number;
    limit?: number;
}

/**
 * 📄 Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. Returns a File object on success.
 */
interface getFile {
    file_id: string;
}

/**
 * 🔨 Use this method to ban a user in a group, a supergroup, or a channel. Returns True on success.
 */
interface banChatMember {
    chat_id: number | string;
    user_id: number;
    until_date?: number;
    revoke_messages?: boolean;
}

/**
 * 🔨 Use this method to unban a previously banned user in a group, a supergroup, or a channel. Returns True on success.
 */
interface unbanChatMember {
    chat_id: number | string;
    user_id: number;
    only_if_banned?: boolean;
}

/**
 * 🔒 Use this method to restrict a user in a supergroup. Returns True on success.
 */
interface restrictChatMember {
    chat_id: number | string;
    user_id: number;
    permissions: ChatPermissions;
    until_date?: number;
}

/**
 * 👮‍♂️ Use this method to promote or demote a user in a group, a supergroup, or a channel. Returns True on success.
 */
interface promoteChatMember {
    chat_id: number | string;
    user_id: number;
    is_anonymous?: boolean;
    can_change_info?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_delete_messages?: boolean;
    can_invite_users?: boolean;
    can_restrict_members?: boolean;
    can_pin_messages?: boolean;
    can_promote_members?: boolean;
}

/**
 * 👑 Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 */
interface setChatAdministratorCustomTitle {
    chat_id: number | string;
    user_id: number;
    custom_title: string;
}

/**
 * 🔨 Use this method to ban or unban a user from a group, a supergroup, or a channel. Returns True on success.
 */
interface banChatSenderChat {
    chat_id: number | string;
    user_id: number;
    ban?: boolean;
    until_date?: number;
}

/**
 * 🔨 Use this method to unban or ban a user from a group, a supergroup, or a channel. Returns True on success.
 */
interface unbanChatSenderChat {
    chat_id: number | string;
    user_id: number;
    only_if_banned?: boolean;
}

/**
 * 🔒 Use this method to set default chat permissions for all members. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatPermissions {
    chat_id: number | string;
    permissions: ChatPermissions;
}

/**
 * 🌍 Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as a ChatInviteLink object.
 */
interface exportChatInviteLink {
    chat_id: number | string;
}

/**
 * 🔗 Use this method to create a new chat invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link
 */
interface createChatInviteLink {
    chat_id: number | string;
    expire_date?: number;
    member_limit?: number;
}

/**
 * 🔗 Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the edited invite link as a ChatInviteLink object.
 */
interface editChatInviteLink {
    chat_id: number | string;
    invite_link: string;
    expire_date?: number;
    member_limit?: number;
}

/**
 * 🔗 Use this method to revoke an invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the revoked invite link as a ChatInviteLink object.
 */
interface revokeChatInviteLink {
    chat_id: number | string;
    invite_link: string;
}

/**
 * 🔗 Use this method to approve or decline a request to join a chat through invite link. Returns True on success.
 */
interface answerChatInviteLink {
    chat_id: number | string;
    invite_link: string;
    user_id: number;
    is_approved: boolean;
}

/**
 * 📷 Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface deleteChatPhoto {
    chat_id: number | string;
}

/**
 * 💬 Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatTitle {
    chat_id: number | string;
    title: string;
}

/**
 * 📌 Use this method to pin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface pinChatMessage {
    chat_id: number | string;
    message_id: number;
    disable_notification?: boolean;
}

/**
 * 📌 Use this method to unpin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface unpinChatMessage {
    chat_id: number | string;
}

/**
 * 📌 Use this method to unpin all messages in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface unpinAllChatMessages {
    chat_id: number | string;
}

/**
 * 💬 Use this method to leave a group, a supergroup, or a channel. Returns True on success.
 */
interface leaveChat {
    chat_id: number | string;
}

/**
 * 📢 Use this method to get information about a chat. Returns a Chat object on success.
 */
interface getChat {
    chat_id: number | string;
}

/**
 * 📢 Use this method to get a list of administrators in a chat. On success, returns an Array of ChatMember objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
 */
interface getChatAdministrators {
    chat_id: number | string;
}

/**
 * 💬 Use this method to get the number of members in a chat. Returns Int on success.
 */
interface getChatMemberCount {
    chat_id: number | string;
}

/**
 * 📢 Use this method to get information about a member of a chat. Returns a ChatMember object on success.
 */
interface getChatMember {
    chat_id: number | string;
    user_id: number;
}

/**
 * 🎭 Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface setChatStickerSet {
    chat_id: number | string;
    sticker_set_name: string;
}

/**
 * 🎭 Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
interface deleteChatStickerSet {
    chat_id: number | string;
}

/**
 * 🎭 Use this method to get the specified chat topic icon stickers set.
 * Returns a StickerSet object on success.
 */
interface getForumTopicIconStickers {
    chat_id: number | string;
    icon_name: string;
}

/**
 * 🔖 Use this method to create a new topic in a chat. Returns the created ForumTopic object on success.
 */
interface createForumTopic {
    chat_id: number | string;
    name: string;
    icon_color: string;
    icon_custom_emoji_id: number
}

/**
 * 🔖 Use this method to edit a topic in a chat. Returns the edited ForumTopic object on success.
 */
interface editForumTopic {
    chat_id: number | string;
    message_thread_id: number;
    name: string;
    icon_custom_emoji_id: string;
}

/**
 * 🔖 Use this method to close a topic in a chat. Returns the closed ForumTopic object on success.
 */
interface closeForumTopic {
    chat_id: number | string;
    topic_id: number;
}

/**
 * 🔖 Use this method to reopen a topic in a chat. Returns the reopened ForumTopic object on success.
 */
interface reopenForumTopic {
    chat_id: number | string;
    topic_id: number;
}

/**
 * 🔖 Use this method to delete a topic in a chat. Returns True on success.
 */
interface deleteForumTopic {
    chat_id: number | string;
    topic_id: number;
}

/**
 * 🔖 Use this method to unpin all messages in a chat topic. Returns True on success.
 */
interface unpinAllForumTopicMessages {
    chat_id: number | string;
    topic_id: number;
}

/**
 * 🔖 Use this method to edit the settings of a general chat topic. Returns the edited ForumTopic object on success.
 */
interface editGeneralForumTopic {
    chat_id: number | string;
    name: string;
}

/**
 * 🔖 Use this method to close a general chat topic. Returns the closed ForumTopic object on success.
 */
interface closeGeneralForumTopic {
    chat_id: number | string;
}

/**
 * 🔖 Use this method to reopen a general chat topic. Returns the reopened ForumTopic object on success.
 */
interface reopenGeneralForumTopic {
    chat_id: number | string;
}

/**
 * 🔖 Use this method to hide a general chat topic. Returns the hidden ForumTopic object on success.
 */
interface hideGeneralForumTopic {
    chat_id: number | string;
}

/**
 * 🔖 Use this method to unhide a general chat topic. Returns the unhidden ForumTopic object on success.
 */
interface unhideGeneralForumTopic {
    chat_id: number | string;
}

/**
 * 🕹 Use this method to answer a callback query sent from a custom keyboard or an inline button. Returns True on success.
 */
interface answerCallbackQuery {
    callback_query_id: string;
    text?: string;
    show_alert?: boolean;
    url?: string;
    cache_time?: number;
}

/**
 * 🚀 Use this method to set the list of commands supported by your bot. Returns True on success.
 */
interface setMyCommands {
    commands: BotCommand[];
}

/**
 * 🚀 Use this method to delete the list of commands supported by your bot for the given scope and user language.
 * Returns True on success.
 */
interface deleteMyCommands {
    scope?: BotCommandScope;
    language_code?: string;
}

/**
 * 🚀 Use this method to get the current list of commands supported by your bot. Returns Array of BotCommand on success.
 */
interface getMyCommands {
    scope?: BotCommandScope;
    language_code?: string;
}

/**
 * 🚀 Use this method to add a new button to a chat menu. Returns True on success.
 */
interface setChatMenuButton {
    chat_id: number | string;
    button: KeyboardButton;
    index?: number;
}

/**
 * 🚀 Use this method to get the current chat menu buttons. Returns Array of KeyboardButton on success.
 */
interface getChatMenuButton {
    chat_id: number | string;
}

/**
 * 🔑 Use this method to set the default administrator rights of the bot for a chat. Returns True on success.
 */
interface setMyDefaultAdministratorRights {
    chat_id: number | string;
    rights: ChatPermissions;
}

/**
 * 🚀 Use this method to get the default administrator rights of the bot for a chat. Returns ChatPermissions on success.
 */
interface getMyDefaultAdministratorRights {
    chat_id: number | string;
}


