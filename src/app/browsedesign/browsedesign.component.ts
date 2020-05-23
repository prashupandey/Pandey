import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browsedesign',
  templateUrl: './browsedesign.component.html',
  styleUrls: ['./browsedesign.component.css']
})
export class BrowsedesignComponent implements OnInit {

  designs;
  imgURL: string | ArrayBuffer;
  designform: any;
  image: any;

  constructor(private designservice: DesignService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDesigns();
    // this.initForm();
  }

  getDesigns(){
    this.designservice.getDesigns().subscribe(data => {
      this.designs = data;
      console.log(data);
    })
  }

  selectDesign(selDesign){
    sessionStorage.setItem('design', JSON.stringify(selDesign));
    this.router.navigate(['/browsedesigner']);
  }

  initForm(){
    this.designform = this.fb.group({
      name : '',
      image : '',
      description : '',
      created : new Date
    })
  }


  userSubmit(formdata){

    if(this.designform.invalid){
      // alert('incorrect data')

      return;
    }
    formdata.image = this.image;
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
