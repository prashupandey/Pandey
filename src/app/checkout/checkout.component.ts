import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { OrderService } from '../order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
 
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  amount;
  user;
  designer;
  order;
  orderform;
  constructor(private orderservice: OrderService, private router: Router,
    private cd: ChangeDetectorRef, private http: HttpClient, private fb: FormBuilder) { }
 
  ngOnInit() {
    console.log(`to pay ${this.amount}`)
    this.user = JSON.parse(sessionStorage.getItem('user')); 
    this.designer = JSON.parse(sessionStorage.getItem('designer'));
    let cloth = JSON.parse(sessionStorage.getItem('cloth'));
    let design = JSON.parse(sessionStorage.getItem('design'));
    this.order = { design : design, cloth : cloth};
    this.initForm();
    // this.loadStripe();
  }

  initForm(){
    this.orderform = this.fb.group({
      user : this.user._id,
      designer : this.designer._id,
      data : this.order,
      created : new Date()
    })
  }
 
  ngAfterViewInit() {
 
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };
 
    this.card = elements.create('card', {style});
    this.card.mount(this.cardInfo.nativeElement);
 
    this.card.addEventListener('change', this.cardHandler);
  }
 
  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
 
  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
  
  completePayment(secret, obj){
    const that = obj
    stripe.confirmCardPayment(secret, {
      payment_method: {
        card: this.card,
        billing_details: {
          name: 'Leon S Kennedy'
        }
      }
    }).then(function(result) {
      if (result.error) {
        
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          console.log('success');
          that.addOrder();
          // console.log(card);
        }
      }
    });
  }
 
  addOrder(){
    this.orderservice.addOrder(this.orderform.value).subscribe((message)=>
      {
        console.log(message); 
        Swal.fire({
          icon: 'success',
          title: 'Order Placed!!',
          text: 'You will be informed once it confirmed!'
        }).then(() => {
          window.location.replace('http://localhost:3000/products/zipfiles/'+this.order.modeldata.file);
        })
      })
  }
 
  getIntent(){
    this.http.post('http://localhost:3000/create-payment-intent', {amount : 100 * 100}).subscribe(data => {
      console.log(data);
      this.completePayment(data['client_secret'], this);
      console.log(this.card);
    });
  
}

}
