import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  url = 'http://localhost:3000/designer';
  constructor(private http:HttpClient) { }

  getByEmail(email){
    return this.http.get(this.url+`/getbyemail/${email}`);
  }

  uploadImage(file){
    return this.http.post(this.url+'/addimg',file)
  }

  addDesign(formdata){
    return this.http.post(this.url+'/add', formdata);
  }

  getDesigners(){
    return this.http.get(this.url+'/getall');
  }
}
