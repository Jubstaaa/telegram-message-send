# Telegram Message Send

## Installation

#### With yarn

```sh
yarn add telegram-message-send
```

#### With NPM

```sh
npm install telegram-message-send
```

## Getting Started

```jsx
import {
  telegramSendMessage,
  telegramSendPhoto,
  telegramSendAudio,
  telegramSendDocument,
  telegramSendLocation,
  telegramSendContact,
  telegramSendPoll,
  telegramSendDice,
} from 'telegram-message-send'

const botKey = '#########'
const chatId = '#########'

telegramSendMessage(botKey, chatId, 'Hello World')
telegramSendPhoto(botKey, chatId, 'https://avatars.githubusercontent.com/u/100691616?s=200&v=4', 'Custom Caption')
telegramSendAudio(botKey, chatId, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 'Custom Caption')
telegramSendDocument(
  botKey,
  chatId,
  'https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf',
  'Custom Caption',
)
telegramSendLocation(botKey, chatId, 41.084677113651814, 29.00455392606353)
telegramSendContact(botKey, chatId, 'Ilker Balcilar', '+905555555555')
telegramSendPoll(botKey, chatId, 'Which one would you prefer', ['Javascript', 'Typescript'])
telegramSendDice(botKey, chatId, 'dice')
```

## Create a new Telegram bot with BotFather

Create a Telegram bot with BotFather before connecting your bot to Telegram.

1. Start a new conversation with the [BotFather](https://telegram.me/botfather).
1. Send /newbot to create a new Telegram bot.
1. When asked, enter a name for the bot.
1. Copy and save the Telegram bot's access token for later steps.

## Get your Get Your Telegram Chat ID

1. In your Telegram account, search for “@myidbot” or open this link [t.me/myidbot](https://t.me/myidbot) on your smartphone.
1. Start a conversation with that bot and type /getid. You will get a reply back with your user ID.
1. Note the user id.

> In order to receive a message from the bot, you must first send a message to the bot and create a chat.

## telegramSendMessage

| Prop     | Required | Type   | Example       |
| -------- | -------- | ------ | ------------- |
| `botKey` | yes      | string | `#########`   |
| `chatId` | yes      | string | `#########`   |
| `text`   | yes      | string | `Hello World` |

## telegramSendMessage

| Prop       | Required | Type   | Example                                                       |
| ---------- | -------- | ------ | ------------------------------------------------------------- |
| `botKey`   | yes      | string | `#########`                                                   |
| `chatId`   | yes      | string | `#########`                                                   |
| `photoURL` | yes      | string | `https://avatars.githubusercontent.com/u/100691616?s=200&v=4` |
| `caption`  | no       | string | `Custom Caption`                                              |

## telegramSendAudio

| Prop       | Required | Type   | Example                                                         |
| ---------- | -------- | ------ | --------------------------------------------------------------- |
| `botKey`   | yes      | string | `#########`                                                     |
| `chatId`   | yes      | string | `#########`                                                     |
| `audioURL` | yes      | string | `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3` |
| `caption`  | no       | string | `Custom Caption`                                                |

## telegramSendDocument

| Prop          | Required | Type   | Example                                                                      |
| ------------- | -------- | ------ | ---------------------------------------------------------------------------- |
| `botKey`      | yes      | string | `#########`                                                                  |
| `chatId`      | yes      | string | `#########`                                                                  |
| `documentURL` | yes      | string | `https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf` |
| `caption`     | no       | string | `Custom Caption`                                                             |

## telegramSendLocation

| Prop        | Required | Type   | Example              |
| ----------- | -------- | ------ | -------------------- |
| `botKey`    | yes      | string | `#########`          |
| `chatId`    | yes      | string | `#########`          |
| `latitude`  | yes      | number | `41.084677113651814` |
| `longitude` | yes      | number | `29.00455392606353`  |

## telegramSendContact

| Prop           | Required | Type   | Example          |
| -------------- | -------- | ------ | ---------------- |
| `botKey`       | yes      | string | `#########`      |
| `chatId`       | yes      | string | `#########`      |
| `name`         | yes      | string | `Ilker Balcilar` |
| `phone_number` | yes      | string | `+905555555555`  |

## telegramSendPoll

| Prop       | Required | Type                  | Example                        |
| ---------- | -------- | --------------------- | ------------------------------ |
| `botKey`   | yes      | string                | `#########`                    |
| `chatId`   | yes      | string                | `#########`                    |
| `question` | yes      | string                | `Which one would you prefer`   |
| `options`  | yes      | Array<string<string>> | `["Javascript", "Typescript"]` |

## telegramSendDice

| Prop     | Required | Type   | Example                                                |
| -------- | -------- | ------ | ------------------------------------------------------ |
| `botKey` | yes      | string | `#########`                                            |
| `chatId` | yes      | string | `#########`                                            |
| `type`   | no       | string | `dice / dart / bowling / basketball / football / slot` |
