import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'http://localhost:3000';
  socket: any;

  constructor() {
    this.socket = io(this.url);
    
  }

  createUser(username){
    this.socket.emit('create-user', username);
  }

  sendMessage(message){
    this.socket.emit('msg', message);
  }

  recieveMessage(){
    return Observable.create(observer => {
      this.socket.on('recMsg', (data) => {
        observer.next(data);
      })
    })
  }

  // listen(eventName: string) {
  //   return new Observable(( subscriber ) => {
  //     this.socket.on(eventName, (data) => {
  //     subscriber.next(data);
  //     });
  //   });
  //   }
  // emit(eventName: string, data: any){
  //     this.socket.emit(eventName,data);
  // }
}
