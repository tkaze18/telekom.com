import { telegramService } from "@/lib/telegram-service"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    // Send a test notification
    await telegramService.sendNotification({
      type: "info",
      title: "Test Notification",
      message: "Dies ist eine Test-Benachrichtigung vom Telekom Login System.",
      username: "test-user",
      metadata: {
        environment: process.env.NODE_ENV || "development",
        timestamp: new Date().toISOString(),
      },
    })

    return NextResponse.json({ success: true, message: "Test notification sent" })
  } catch (error) {
    console.error("Test notification failed:", error)
    return NextResponse.json({ success: false, error: "Failed to send test notification" }, { status: 500 })
  }
}
