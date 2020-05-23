import { Component, OnInit } from '@angular/core';
import { DesignerService } from '../designer.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-designerlogin',
  templateUrl: './designerlogin.component.html',
  styleUrls: ['./designerlogin.component.css']
})
export class DesignerloginComponent implements OnInit {

  loginform;
  constructor(private designerservice: DesignerService, private router: Router
    , private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }
  
  initform(){
    this.loginform = this.formbuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  loginSubmit(formdata){
    this.designerservice.getByEmail(formdata.email).subscribe(data => {
      let logged_user = data;
 
      if(logged_user){
 
        if(logged_user['password'] == formdata['password']){
 
          //add user details to sessionstorage
          sessionStorage.setItem('designer', JSON.stringify(logged_user));

            //navigate to designer dashboard
            this.router.navigate(['/ddash'])
            return;
        }else{
          Swal.fire({
            icon : 'error',
            title : 'OOps!',
            text : 'Your username or password is incorrect',
          })
        }
 
      }else{
        Swal.fire({
          icon : 'error',
          title : 'OOps!',
          text : 'Your username or password is incorrect',
        })
      }
 
    })
  }
 
  
 
  getControls(){
    return this.loginform.controls;
  }

}
