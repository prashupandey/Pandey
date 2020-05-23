import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer-dashboard',
  templateUrl: './designer-dashboard.component.html',
  styleUrls: ['./designer-dashboard.component.css']
})
export class DesignerDashboardComponent implements OnInit {

  showChat = true;
  designer;

  constructor() { }

  ngOnInit(): void {
    this.designer = JSON.parse(sessionStorage.getItem('designer'));
  }

  hideall(){
    this.showChat = false;
  }


}
