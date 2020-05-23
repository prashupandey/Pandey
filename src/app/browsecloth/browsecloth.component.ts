import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import Swal from 'sweetalert2';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browsecloth',
  templateUrl: './browsecloth.component.html',
  styleUrls: ['./browsecloth.component.css']
})
export class BrowseclothComponent implements OnInit {
 cloths;
  selectedFile: any;
  avatarName: any;
  message: string;
  imgURL: string | ArrayBuffer;
  clothform: any;

  constructor( private clothservice: ClothService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.clothservice.getCloth().subscribe(data =>{
      console.log(data)
      this.cloths = data
    })
    this.initForm();
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
      formdata.image = this.avatarName;
      this.clothservice.addCloth(formdata).subscribe(data => {
        console.log(data);
      })
  }
  
  returnControls(){
    return this.clothform.controls;
  }

  checkout(cloth){
    sessionStorage.setItem('cloth', JSON.stringify(cloth));
    this.router.navigate(['/checkout']);
  }

}
