import { Component, OnInit } from '@angular/core';
import { DesignerService } from '../designer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browsedesigner',
  templateUrl: './browsedesigner.component.html',
  styleUrls: ['./browsedesigner.component.css']
})
export class BrowsedesignerComponent implements OnInit {

  designers;
  constructor(private designerservice: DesignerService, private router: Router) { }

  ngOnInit(): void {
    this.getDesigners();
  }

  getDesigners(){
    this.designerservice.getDesigners().subscribe(data => {
      this.designers = data;
      console.log(data);
    })
  }

  selectDesigner(selDesigner){
    sessionStorage.setItem('designer', JSON.stringify(selDesigner));
    this.router.navigate(['/browsecloth']);
  }

}
