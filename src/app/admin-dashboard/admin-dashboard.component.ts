import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  showaddDesign=false
  showaddcloth=false
  showmanagecloth=false
  
  constructor() { }

  ngOnInit(): void {
  }

  hideall(){
    this.showaddDesign=false
    this.showaddcloth=false
    this.showmanagecloth=false
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
}
