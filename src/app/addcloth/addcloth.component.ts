import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-addcloth',
  templateUrl: './addcloth.component.html',
  styleUrls: ['./addcloth.component.css']
})
export class AddclothComponent implements OnInit {

  clothform;
  user;

  constructor(private fb: FormBuilder, private clothservice: ClothService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.clothform = this.fb.group({
      name : ['', Validators.required],
      brand : ['', Validators.required],
      price : ['', Validators.required],
      type : ['', Validators.required]
    })
  }

  formSubmit(formdata){

      if(this.clothform.invalid){
  
        return;
      }
  
      this.clothservice.addCloth(formdata).subscribe(data => {
        console.log(data);
      })
    }
  
    returnControls(){
      return this.clothform.controls;
    }

}
