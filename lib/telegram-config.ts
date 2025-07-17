// Telegram Bot configuration
export const telegramConfig = {
  botToken: process.env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN",
  chatId: process.env.TELEGRAM_CHAT_ID || "YOUR_CHAT_ID", // Your chat ID or channel ID
  apiUrl: "https://api.telegram.org/bot",
}

// Telegram notification types
export interface TelegramNotification {
  type: "success" | "error" | "warning" | "info"
  title: string
  message: string
  username?: string
  timestamp?: Date
  metadata?: Record<string, any>
}
