import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  showOrders = false;
  showEditform = false;
  showOrderform = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowOrders(){
    this.showOrders = true;
    this.showEditform = false;
    this.showOrderform = false;

  }
  togglshowEditform(){
    this.showOrders = false;
    this.showEditform = true;
    this.showOrderform = false;
  }
  
  toggleOrderform(){
    this.showOrders = false;
    this.showEditform = false;
    this.showOrderform = true;

  }
}
