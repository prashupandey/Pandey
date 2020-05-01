import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  url = "http://localhost:3000/cloth"
  constructor(private http: HttpClient) { }
  uploadImage(file)
{
return this.http.post(this.url+'/addimg',file)
}
  addCloth(formdata){
    return this.http.post(this.url+'/add', formdata)
  }
  getclothById(id){
    return this.http.get(this.url+'/getbyid/'+id)
  }
  addReview(data){
    return this.http.post('http://localhost:3000/review/add', data);
  }

  updateReview(id, review){
    return this.http.post(`http://localhost:3000/review/update/${id}`, review);
  }

  getAllReviews(product_id){
    return this.http.get(`http://localhost:3000/review/getbyproduct/${product_id}`);
  }

  getUserReview(user_id){
    return this.http.get(`http://localhost:3000/review/getbyuser/${user_id}`);
  }
  getCloth(){
    return this.http.get(this.url+'/getall')
  } 
}
