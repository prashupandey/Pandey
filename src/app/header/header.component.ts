import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isuser;
  isadmin;
  constructor(public userservice: UserService) { }

  ngOnInit(): void {
    this.isuser = JSON.parse(sessionStorage.getItem('user'));
    this.isadmin = JSON.parse(sessionStorage.getItem('admin'));

    let currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  logout(){
    this.userservice.logout();
  }

}
