export const telegramSendMessage = (botKey: string, chatId: string, text: string) => {
  fetch(`https://api.telegram.org/bot${botKey}/sendMessage?chat_id=${chatId}&text=${text}`).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendPhoto = (botKey: string, chatId: string, imageURL: string, caption = undefined) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendPhoto?chat_id=${chatId}&photo=${imageURL}${
      caption ? `&caption=${caption}` : ''
    }`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendAudio = (botKey: string, chatId: string, audioURL: string, caption = undefined) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendAudio?chat_id=${chatId}&audio=${audioURL}${
      caption ? `&caption=${caption}` : ''
    }`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendDocument = (botKey: string, chatId: string, videoURL: string, caption = undefined) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendDocument?chat_id=${chatId}&document=${videoURL}${
      caption ? `&caption=${caption}` : ''
    }`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendVideo = (botKey: string, chatId: string, videoURL: string, caption = undefined) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendVideo?chat_id=${chatId}&video=${videoURL}${
      caption ? `&caption=${caption}` : ''
    }`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendGIF = (botKey: string, chatId: string, gifURL: string, caption = undefined) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendAnimation?chat_id=${chatId}&animation=${gifURL}${
      caption ? `&caption=${caption}` : ''
    }`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendLocation = (botKey: string, chatId: string, latitude: number, longitude: number) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendLocation?chat_id=${chatId}&latitude=${latitude}&longitude=${longitude}`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendContact = (botKey: string, chatId: string, name: string, phone_number: string) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendContact?chat_id=${chatId}&first_name=${name}&phone_number=${phone_number}`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendPoll = (botKey: string, chatId: string, question: string, options: Array<string>) => {
  fetch(
    `https://api.telegram.org/bot${botKey}/sendPoll?chat_id=${chatId}&question=${question}&options=${JSON.stringify(
      options,
    )}`,
  ).then((res) => {
    if (res.status > 400) {
      return false
    } 
      return true
  })
}

export const telegramSendDice = (botKey: string, chatId: string, type: string) => {
  let emoji = '🎲'
  switch (type) {
    case 'dice':
      emoji = '🎲'
      break
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
    default:
      emoji = '🎲'
      break
  }
  fetch(`https://api.telegram.org/bot${botKey}/sendDice?chat_id=${chatId}${type ? `&emoji=${emoji}` : ''}`).then(
    (res) => {
      if (res.status > 400) {
        return false
      } 
        return true
    },
  )
}
