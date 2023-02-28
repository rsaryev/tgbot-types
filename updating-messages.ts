import { Message, MessageEntity, InlineKeyboardMarkup, InputMedia } from "./types";

/**
 * 💬 Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 */
export interface editMessageText {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    text: string;
    parse_mode?: string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 💬 Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 */
export interface editMessageCaption {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
}

// editMessageMedia

/**
 * 💬 Use this method to edit animation, audio, document, photo, or video messages. If a message is a part of a message album, then it can be edited only to a photo or a video. Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded. Use previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 */
export interface editMessageMedia {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    media: InputMedia;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 💬 Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 */
export interface editMessageReplyMarkup {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 📊 Use this method to stop a poll which was sent by the bot. On success, the stopped Poll with the final results is returned.
 */
export interface stopPoll {
    chat_id: number | string;
    message_id: number;
    reply_markup?: InlineKeyboardMarkup;
}

/**
 * 🗑 Use this method to delete a message, including service messages, with the following limitations: - A message can only be deleted if it was sent less than 48 hours ago. - Bots can delete outgoing messages in private chats, groups, and supergroups. - Bots can delete incoming messages in private chats. - Bots granted can_post_messages permissions can delete outgoing messages in channels. - If the bot is an administrator of a group, it can delete any message there. - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there. Returns True on success.
 */

export interface deleteMessage {
    chat_id: number | string;
    message_id: number;
}