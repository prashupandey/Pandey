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

  toggleaddDesign(){ 
    this.showaddDesign=true
    
  }
  toggleaddCloth(){ 
    this.showaddcloth=true
    
  }

  togglemanageCloth(){ 
    this.showmanagecloth=true
    
  }
}
