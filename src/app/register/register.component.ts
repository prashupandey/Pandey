import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform;
  hide = true;
  
  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userform = this.fb.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      gender : ['', Validators.required],
      contact : ['', Validators.required],
      address : ['', Validators.required],
      email : ['', Validators.required],
      admin : false,
      password : ['', Validators.required],
      confirm : ['', Validators.required],
    }, {validators : this.matchPassword('password', 'confirm')})
  }

  matchPassword(password,confirm_pass)
    {
      return (form)=> 
      {
        let passControl=form.controls[password];
        let confirmControl=form.controls[confirm_pass];
        if(passControl.value !==confirmControl.value)
        {
          confirmControl.setErrors({match:true})
        }
     }
   }

  userSubmit(formdata){

    if(this.userform.invalid){
      // alert('incorrect data')

      return;
    }

    this.userservice.getByUsername(formdata.username).subscribe(data => {
      if(!data){
        this.userservice.addUser(formdata).subscribe(data => {
          console.log(data);
        })
      }else{
        Swal.fire({
          'icon' : 'error',
          'title' : 'Error Occured',
          'text' : 'Username has already been taken'
        })
      }
    })

    
  }

  returnControls(){
    return this.userform.controls;
  }

}
