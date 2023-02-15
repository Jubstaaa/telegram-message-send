export const telegramSendMessage = (botKey: string, chatId: string, text: string) => {
  fetch(`https://api.telegram.org/bot${botKey}/sendMessage?chat_id=${chatId}&text=${text}`)
    .then((res) => {
      console.log(res)
      return true
    })
    .catch((err) => {
      console.log(err)
      return false
    })
}
