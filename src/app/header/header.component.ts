import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedin = false;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    let currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
  if(user){
    this.loggedin = true;
  }

  logout(){
    
  }

}
