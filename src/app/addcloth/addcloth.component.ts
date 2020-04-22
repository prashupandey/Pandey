import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClothService } from '../cloth.service';
import Swal from 'sweetalert2';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-addcloth',
  templateUrl: './addcloth.component.html',
  styleUrls: ['./addcloth.component.css']
})
export class AddclothComponent implements OnInit {

  clothform;
  user;
  selectedFile;
  avatarName;
  imgURL;
  message;

  constructor(private fb: FormBuilder, private clothservice: ClothService) { }
  
  ngOnInit(): void {
    this.initForm()
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
    this.selectedFile=files[0];
    this.avatarName=this.selectedFile.name;
    console.log(this.avatarName);
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.clothservice.uploadImage(formData).subscribe(response=>
      {
      console.log(response)
      })
  }
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
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
