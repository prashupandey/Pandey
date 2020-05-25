import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  showOrders = true;
  showEditform = false;
  showOrderform = false;
  showChat = false;
  chatId;
  
  user;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  toggleShowOrders(){
    this.hideall();
    this.showOrders = true;
  }

  toggleEditform(){
    this.hideall();
    this.showEditform = true;
  }
  
  toggleOrderform(){
    this.hideall();
    this.showOrderform = true;
  }

  createChat(id){
    this.hideall();
    this.showChat = true;
    this.chatId = id;
  }

  // toggleChat(){
  //   this.hideall();
  //   this.showChat()
  // }

  hideall(){
    this.showOrders = false;
    this.showEditform = false;
    this.showOrderform = false;
    this.showChat = false;
  }
}
