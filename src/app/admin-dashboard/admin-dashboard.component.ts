import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  showaddDesign=false;
  showaddcloth=false;
  showmanagecloth=false;
  showmanagedesign=false;
  showadddesigner=false;
  showmanagedesigner=false;
  showwebstats = true;

  admin;
  
  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('admin');
    this.admin = JSON.parse(sessionStorage.getItem('admin'));
  }

  ngOnDestroy(){
    document.body.classList.remove('admin');
  }

  hideall(){
    this.showaddDesign=false
    this.showadddesigner=false
    this.showmanagedesigner=false
    this.showaddcloth=false
    this.showmanagecloth=false
    this.showwebstats=false
  }

  toggleaddDesign(){ 
    this.hideall();
    this.showaddDesign=true
    
  }
  toggleaddCloth(){ 
    this.hideall();
    this.showaddcloth=true
    
  }

  togglemanageCloth(){ 
    this.hideall();
    this.showmanagecloth=true
    
  }

  togglemanageDesign(){
    this.hideall();
    this.showmanagedesign = true;
  }

  togglemanageDesigner(){
    this.hideall();
    this.showmanagedesigner = true;
  }

  toggleaddDesigner(){
    this.hideall();
    this.showadddesigner = true;
  }

  togglewebstats(){
    this.hideall();
    this.showwebstats = true;
  }

}
