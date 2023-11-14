import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { NotificationData } from '@/types/notification';
import { URL } from '@/constants/url';
import { useNotificationStore } from '@/store/notificateStore';

export class WebSocketService {
  private client: Client;
  private connected: boolean = false;

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS(URL.API_BASE_URL + 'ws-endpoint'),
      onConnect: () => {
        this.connected = true;
        this.subscribeToNotifications();
        console.log('STOMP 연결 성공');
      },
      onDisconnect: () => {
        this.connected = false;
      },
    });

    this.client.onStompError = (err) => {
      console.error('STOMP 에러 : ', err);
    };
  }

  private subscribeToNotifications(): void {
    this.client.subscribe('/user/sub/notifications', (message) => {
      if (message.body) {
        const notification: NotificationData = JSON.parse(message.body);
        console.log(notification);
        useNotificationStore.getState().addNotification(notification);
      }
    });
  }

  public setToken(token: string): void {
    this.client.configure({
      connectHeaders: {
        Authorization: token,
      },
    });
  }

  public connect(): void {
    if (!this.connected) {
      this.client.activate();
    }
  }

  public disconnect(): void {
    if (this.connected) {
      this.client.deactivate();
    }
  }
}
