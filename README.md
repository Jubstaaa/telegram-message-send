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
import { telegramSendMessage } from 'telegram-message-send'

const botKey = '#########'
const chatId = '#########'

telegramSendMessage(botkey, chatId, 'Your Amazing Message')
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

