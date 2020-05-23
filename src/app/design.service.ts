import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  url = 'http://localhost:3000/design'
  constructor(private http:HttpClient) { }

  
  uploadImage(file){
  return this.http.post(this.url+'/addimg',file)
  }

  addDesign(formdata){
    return this.http.post(this.url+'/add', formdata);
  }

  getDesigns(){
    return this.http.get(this.url+'/getall');
  }

  deleteDesign(id){
    return this.http.delete(this.url+'/delete/'+id);
  }

}
