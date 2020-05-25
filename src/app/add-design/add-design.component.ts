import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-design',
  templateUrl: './add-design.component.html',
  styleUrls: ['./add-design.component.css']
})
export class AddDesignComponent implements OnInit {
designform
hide = true
image;
imgURL;

  constructor(private fb: FormBuilder, private designservice: DesignService) { }

  ngOnInit(): void {
    this.initForm();
  }
  

  initForm(){
    this.designform = this.fb.group({
      name : '',
      image : '',
      price : '',
      description : '',
      created : new Date
    })
  }


  userSubmit(formdata){

    if(this.designform.invalid){
      // alert('incorrect data')

      return;
    }
    formdata.images = [this.image];
    this.designservice.addDesign(formdata).subscribe(data => {
      console.log(data);
    })
  }

  uploadImage(event)
  {
    let files = event.target.files;
    if(files.length===0)
      return;
 
    var mimeType=files[0].type;
    if(mimeType.match(/image\/*/)==null)
    { 
      Swal.fire("Images Only");
      return;
    }
    this.preview(event.target.files)
    let formData=new FormData();
    let selectedFile=files[0];
    this.image= selectedFile.name;
    formData.append('image',  selectedFile,  selectedFile.name);
    this.designservice.uploadImage(formData).subscribe(response=>
      {
      console.log(response)
      })
  }
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      let message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }

  returnControls(){
    return this.designform.controls;
  }
}