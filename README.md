```markdown
# Telegram Message Send

This library provides a simple class-based interface for sending messages and various media types to a Telegram bot.

## Installation

#### With yarn

```bash
yarn add telegram-message-send
```

#### With NPM

```bash
npm install telegram-message-send
```

## Getting Started

```typescript
import { TelegramBot } from 'telegram-message-send';

const botKey = 'YOUR_BOT_KEY';
const chatId = 'YOUR_CHAT_ID';

const bot = new TelegramBot(botKey, chatId);

async function sendMessages() {
  await bot.sendMessage('Hello World');
  await bot.sendPhoto('https://avatars.githubusercontent.com/u/100691616?s=200&v=4', 'Custom Caption');
  await bot.sendAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 'Custom Caption');
  await bot.sendDocument('https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf', 'Custom Caption');
  await bot.sendLocation(41.084677113651814, 29.00455392606353);
  await bot.sendContact('Ilker Balcilar', '+905555555555');
  await bot.sendPoll('Which one would you prefer', ['Javascript', 'Typescript']);
  await bot.sendDice('dice'); // or 'dart', 'basketball', etc.
}


sendMessages();
```

## Create a new Telegram bot with BotFather

Create a Telegram bot with BotFather before connecting your bot to Telegram.

1. Start a new conversation with the [BotFather](https://telegram.me/botfather).
2. Send `/newbot` to create a new Telegram bot.
3. When asked, enter a name for the bot.
4. Copy and save the Telegram bot's access token (your `botKey`) for later steps.

## Get Your Telegram Chat ID

1. In your Telegram account, search for “@myidbot” or open this link [t.me/myidbot](https://t.me/myidbot) on your smartphone.
2. Start a conversation with that bot and type `/getid`. You will get a reply back with your user ID.
3. Note the user ID (your `chatId`).

> In order to receive a message from the bot, you must first send a message to the bot and create a chat.

## TelegramBot Class Methods


### `new TelegramBot(botKey, chatId)`

* **`botKey`** (string, required): Your Telegram bot's access token.
* **`chatId`** (string, required): The ID of the chat to send messages to.


### `sendMessage(text)`

* **`text`** (string, required): The message text to send.

### `sendPhoto(photoURL, caption?)`

* **`photoURL`** (string, required): URL of the photo to send.
* **`caption`** (string, optional): Photo caption.

### `sendAudio(audioURL, caption?)`

* **`audioURL`** (string, required): URL of the audio file to send.
* **`caption`** (string, optional): Audio caption.

### `sendDocument(documentURL, caption?)`

* **`documentURL`** (string, required): URL of the document to send.
* **`caption`** (string, optional): Document caption.

### `sendVideo(videoURL, caption?)`

* **`videoURL`** (string, required): URL of the video to send.
* **`caption`** (string, optional): Video caption.

### `sendGIF(gifURL, caption?)`

* **`gifURL`** (string, required): URL of the GIF to send.
* **`caption`** (string, optional): GIF caption.


### `sendLocation(latitude, longitude)`

* **`latitude`** (number, required): Latitude of the location.
* **`longitude`** (number, required): Longitude of the location.

### `sendContact(name, phoneNumber)`

* **`name`** (string, required): Contact's name.
* **`phoneNumber`** (string, required): Contact's phone number.

### `sendPoll(question, options)`

* **`question`** (string, required): Poll question.
* **`options`** (string[], required): Array of poll options.

### `sendDice(type?)`

* **`type`** (string, optional): Type of dice to send ('dice', 'dart', 'basketball', 'football', 'bowling', 'slot'). Defaults to 'dice'.
```