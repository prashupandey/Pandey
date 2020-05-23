import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  constructor(private userService: UserService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.loginform = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  loginSubmit(formdata){
    this.userService.getByUsername(formdata.username).subscribe(data => {
      let logged_user = data;
 
      if(logged_user){
 
        if(logged_user['password'] == formdata['password']){
 
          //add user details to sessionstorage
 
          if(logged_user['admin']){
            //navigate to admin dashboard
            sessionStorage.setItem('admin', JSON.stringify(logged_user));
            this.router.navigate(['/admin'])
            return;
          }else{
            //navigate to home
            sessionStorage.setItem('user', JSON.stringify(logged_user));
            this.router.navigate(['/home'])
            return;
          }
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
