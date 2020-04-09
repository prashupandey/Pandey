import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-design-upload',
  templateUrl: './design-upload.component.html',
  styleUrls: ['./design-upload.component.css']
})
export class DesignUploadComponent implements OnInit {
  selectedFile;
  avatarName;
  message;
  imgURL;
  constructor(private designService: DesignService) { }

  ngOnInit(): void {
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
    this.designService.uploadImage(formData).subscribe(response=>
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
}
