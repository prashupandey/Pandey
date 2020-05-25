import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DesignService } from '../design.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-upload',
  templateUrl: './design-upload.component.html',
  styleUrls: ['./design-upload.component.css']
})
export class DesignUploadComponent implements OnInit {

  images = [];
  message;
  imgURL;
  designform;

  constructor(private designService: DesignService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.designform = this.fb.group({
      name : ['', Validators.required],
      description : ['', Validators.required]
    })
  }

  getControls(){
    return this.designform.controls;
  }

  submitForm(formdata){
    if(formdata.invalid){
      return ;
    }
    formdata.images = this.images;
    console.log(formdata);
    sessionStorage.setItem('design', JSON.stringify(formdata));
    this.router.navigate(['/browsedesigner']);
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
    for(let file of event.target.files){
      let formData=new FormData();

      this.images.push(file.name);

      formData.append('image', file, file.name);
      this.designService.uploadImage(formData).subscribe(response=>
        {
        console.log(response)
        })
    }
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
}
