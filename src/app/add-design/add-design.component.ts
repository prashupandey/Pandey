import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-design',
  templateUrl: './add-design.component.html',
  styleUrls: ['./add-design.component.css']
})
export class AddDesignComponent implements OnInit {
designform
hide = true
  constructor(private fb: FormBuilder, private designservice: DesignService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.designform = this.fb.group({
      name : '',
      image : '',
      description : '',
    })
  }


  userSubmit(formdata){

    if(this.designform.invalid){
      // alert('incorrect data')

      return;
    }

    this.designservice.addDesign(formdata).subscribe(data => {
      console.log(data);
    })
  }

  returnControls(){
    return this.designform.controls;
  }
}