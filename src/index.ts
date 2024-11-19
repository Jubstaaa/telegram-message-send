class TelegramBot {
  private botKey: string
  private chatId: string

  constructor(botKey: string, chatId: string) {
    this.botKey = botKey
    this.chatId = chatId
  }

  private async sendRequest(method: string, params: { [key: string]: any } = {}): Promise<boolean> {
    const url = new URL(`https://api.telegram.org/bot${this.botKey}/${method}`)
    for (const key in params) {
      url.searchParams.append(key, params[key])
    }

    try {
      const response = await fetch(url.toString())
      return response.status < 400
    } catch (error) {
      console.error('Telegram API request failed:', error)
      return false
    }
  }

  async sendMessage(text: string): Promise<boolean> {
    return this.sendRequest('sendMessage', { chat_id: this.chatId, text })
  }

  async sendPhoto(imageURL: string, caption?: string): Promise<boolean> {
    return this.sendRequest('sendPhoto', { chat_id: this.chatId, photo: imageURL, caption })
  }

  async sendAudio(audioURL: string, caption?: string): Promise<boolean> {
    return this.sendRequest('sendAudio', { chat_id: this.chatId, audio: audioURL, caption })
  }

  async sendDocument(documentURL: string, caption?: string): Promise<boolean> {
    return this.sendRequest('sendDocument', { chat_id: this.chatId, document: documentURL, caption })
  }

  async sendVideo(videoURL: string, caption?: string): Promise<boolean> {
    return this.sendRequest('sendVideo', { chat_id: this.chatId, video: videoURL, caption })
  }

  async sendGIF(gifURL: string, caption?: string): Promise<boolean> {
    return this.sendRequest('sendAnimation', { chat_id: this.chatId, animation: gifURL, caption })
  }

  async sendLocation(latitude: number, longitude: number): Promise<boolean> {
    return this.sendRequest('sendLocation', { chat_id: this.chatId, latitude, longitude })
  }

  async sendContact(name: string, phoneNumber: string): Promise<boolean> {
    return this.sendRequest('sendContact', { chat_id: this.chatId, first_name: name, phone_number: phoneNumber })
  }

  async sendPoll(question: string, options: string[]): Promise<boolean> {
    return this.sendRequest('sendPoll', { chat_id: this.chatId, question, options: JSON.stringify(options) })
  }

  async sendDice(type: 'dice' | 'dart' | 'basketball' | 'football' | 'bowling' | 'slot' = 'dice'): Promise<boolean> {
    let emoji: string
    switch (type) {
      case 'dart':
        emoji = '🎯'
        break
      case 'basketball':
        emoji = '🏀'
        break
      case 'football':
        emoji = '⚽'
        break
      case 'bowling':
        emoji = '🎳'
        break
      case 'slot':
        emoji = '🎰'
        break
      case 'dice':
      default:
        emoji = '🎲'
        break
    }
    return this.sendRequest('sendDice', { chat_id: this.chatId, emoji })
  }
}
