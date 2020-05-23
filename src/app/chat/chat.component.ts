import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatform;
  chatMessages = [];

  @Input('user') user;
  @Input('recId') recID;

  @ViewChild('chatarea') srolldiv: ElementRef;

  constructor(private chatservice: ChatService, private fb: FormBuilder){

  }

  ngOnInit() {

    this.chatform = this.fb.group({
      message : '',
      sender : this.user._id,
      rec : this.recID,
      created : new Date(),
    });

    this.chatservice.recieveMessage().subscribe(data => {
      console.log(data);
      this.chatMessages.push(data);
    });

    this.chatservice.createUser(this.user._id);
  }

  sendMessage(formdata) {
    console.log(formdata);
    this.chatMessages.push(formdata);
    this.chatform.get('message').reset();
    this.chatservice.sendMessage(formdata);
    this.updateScroll();
  }

  getClass(id){
    return id == this.user._id;
  }

  updateScroll(){
    var element = document.getElementById("chatarea");
    element.scrollTop = element.scrollHeight;
}

}
