import { Component, OnInit } from '@angular/core';
import { DesignerService } from '../designer.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-designer',
  templateUrl: './add-designer.component.html',
  styleUrls: ['./add-designer.component.css']
})
export class AddDesignerComponent implements OnInit {

  designerform;
  image: any;
  imgURL: string | ArrayBuffer;
  constructor(private fb: FormBuilder, private designerservice : DesignerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.designerform = this.fb.group({
      name : '',
      image : '',
      spec : '',
      contact : '',
      email : '',
      description : '',
      password : '',
      created : new Date
    })
  }


  userSubmit(formdata){

    if(this.designerform.invalid){
      // alert('incorrect data')

      return;
    }
    formdata.image = this.image;
    this.designerservice.addDesign(formdata).subscribe(data => {
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
    this.designerservice.uploadImage(formData).subscribe(response=>
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
    return this.designerform.controls;
  }

}
