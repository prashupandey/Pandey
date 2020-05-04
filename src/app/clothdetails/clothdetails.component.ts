import { Component, OnInit } from '@angular/core';
import { ProductService } from '../cloth.service.';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './clothdetails.component.html',
  styleUrls: ['./clothdetails.component.css']
})
export class ClothdetailComponent implements OnInit {

  cloth;
  reviewForm;
  currentUser;
  reviews;
  newreview = true;
  constructor(private clothservice : ClothService, private activated : ActivatedRoute,
    private formbuilder : FormBuilder) { }

  ngOnInit() {

    let id = this.activated.snapshot.paramMap.get('id');

    this.clothservice.getclothById(id).subscribe(data => {
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
      console.log(data);
      this.cloth = data;
      this.getReviews();
      this.getUserReview();
    })
  }

  addReview(formdata){
    if(this.newreview){
      this.clothservice.addReview(formdata).subscribe(data => {
        console.log(data);
        // this.product.reviews.push(data['_id']);
        // this.updateProduct(this.product._id, this.product);
        this.refreshProduct();
      })
    }
  }

  refreshProduct(){
    this.clothservice.getclothById(this.cloth._id).subscribe(data => {
      console.log(data);
      this.cloth = data;
    })
  }

  getReviews(){
    this.clothservice.getAllReviews(this.cloth._id).subscribe(data => {
      this.reviews = data;
      console.log(data);
    })
  }

  getUserReview(){
    this.clothservice.getUserReview(this.currentUser._id).subscribe(data => {
      console.log(data);
      if(data)
        this.newreview = false;
      this.initForm(data);
    })
  }

  initForm(review){
    if(review){
      this.reviewForm = this.formbuilder.group(review);
      return;
    }
    this.reviewForm = this.formbuilder.group({
      user : this.currentUser._id,
      product : this.cloth._id,
      rating : 2,
      review : ''
    })
  }

}