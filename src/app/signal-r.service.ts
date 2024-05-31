import {EventEmitter, Injectable} from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {HubConnectionBuilder} from "@microsoft/signalr";
import {buildApplication} from "@angular-devkit/build-angular/src/builders/application";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection: signalR.HubConnection;
  public userValidated = new EventEmitter<number>();

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7100/chatHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.hubConnection.on('UserValidated', (userId: number) => {
      this.userValidated.emit(userId);
    });

    this.hubConnection.start().catch((err: any) => console.error(err));
  }


}
