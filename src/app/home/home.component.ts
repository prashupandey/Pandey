import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  designs;
  constructor(private designservice: DesignService) { }

  ngOnInit(): void {
    this.getDesigns();
  }

  getDesigns(){
    this.designservice.getDesigns().subscribe(data => {
      console.log(data);
      this.designs = data;
    })
  }

}
