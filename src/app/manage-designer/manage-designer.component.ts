import { Component, OnInit } from '@angular/core';
import { DesignerService } from '../designer.service';

@Component({
  selector: 'app-manage-designer',
  templateUrl: './manage-designer.component.html',
  styleUrls: ['./manage-designer.component.css']
})
export class ManageDesignerComponent implements OnInit {

  designers;
  constructor(private designerservice: DesignerService) { }

  ngOnInit(): void {
    this.getDesigns();
  }

  getDesigns(){
    this.designerservice.getDesigners().subscribe(data => {
      this.designers = data;
      console.log(data);
    })
  }
}
