import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  url = "http://localhost:3000/cloth"
  constructor(private http: HttpClient) { }

  addCloth(formdata){
    return this.http.post(this.url+'/add', formdata)
  }
  
}