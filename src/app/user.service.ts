import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  loggedin = false;
  isadmin = false;

  url = 'http://localhost:3000/user'
  constructor(private http: HttpClient, private router: Router) {
    if(JSON.parse(sessionStorage.getItem('user')) && JSON.parse(sessionStorage.getItem('admin'))){
      this.loggedin = true;
      this.isadmin = true;
    }
    else if(JSON.parse(sessionStorage.getItem('user'))){
      this.loggedin = true;
    }
  }

  addUser(formdata){
    return this.http.post(this.url+'/add', formdata);
  }

  getByUsername(username){
    return this.http.get(this.url+`/getbyusername/${username}`);
  }
 
  getAllUsers(){
    return this.http.get(this.url+`/getall`);
  }
  
  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('admin');
    this.router.navigate(['/login']);
    this.loggedin = false;
  }
}
