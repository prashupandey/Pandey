import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-manageorder',
  templateUrl: './manageorder.component.html',
  styleUrls: ['./manageorder.component.css']
})
export class ManageorderComponent implements OnInit {

  orders;
  user;
  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getUserOrders();
  }

  getUserOrders(){
    this.orderservice.getOrderByUser(this.user._id).subscribe(data => {
      console.log(data);
      this.orders = data;
    })
  }

}
