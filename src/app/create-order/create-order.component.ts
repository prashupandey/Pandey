import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
orderform;
user;
  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
  }
  initForm(){
    this.orderform = this.fb.group({
      name : ['', Validators.required],
      gender : ['', Validators.required],
      contact : ['', Validators.required],
      cloth : ['', Validators.required],
      size : ['', Validators.required],
      tailor : ['', Validators.required],
      design : ['', Validators.required],
      address : ['', Validators.required],
      email : ['', Validators.required],
      description : ['', Validators.required],

    })
  }
}