"use client";

import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import type { NotificationDto } from "@/types/notification";

function getWebSocketUrl(): string {
  if (typeof window === "undefined") return "";
  const envWs = process.env.NEXT_PUBLIC_WS_URL;
  if (envWs?.trim()) return envWs.trim();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  if (apiUrl.startsWith("http")) {
    try {
      const origin = new URL(apiUrl).origin;
      return `${origin}/ws`;
    } catch {
      // ignore
    }
  }
  if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
    console.warn("[Seller WS] NEXT_PUBLIC_WS_URL (hoặc NEXT_PUBLIC_API_URL) chưa set. Cần set để bật thông báo realtime.");
  }
  return "";
}

export function createNotificationClient(
  token: string | null,
  onNotification: (dto: NotificationDto) => void
): Client | null {
  if (!token?.trim()) return null;

  const wsUrl = getWebSocketUrl();
  if (!wsUrl) return null;

  const sockUrl = wsUrl.replace(/^ws:/, "http:").replace(/^wss:/, "https:");
  const client = new Client({
    webSocketFactory: () => new SockJS(sockUrl) as unknown as WebSocket,
    connectHeaders: {
      Authorization: `Bearer ${token}`,
    },
    onConnect: () => {
      client.subscribe("/user/queue/notifications", (message) => {
        try {
          const body = JSON.parse(message.body) as NotificationDto;
          onNotification(body);
        } catch {
          // ignore parse errors
        }
      });
    },
    onStompError: (frame) => {
      console.error("[STOMP]", frame.headers?.message || frame.body);
    },
  });

  return client;
}
