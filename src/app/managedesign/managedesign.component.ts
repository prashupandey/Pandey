import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-managedesign',
  templateUrl: './managedesign.component.html',
  styleUrls: ['./managedesign.component.css']
})
export class ManagedesignComponent implements OnInit {

  designs;
  del = faTrash;

  constructor(private designservice: DesignService) { }

  ngOnInit(): void {
    this.getDesigns();
  }

  getDesigns(){
    this.designservice.getDesigns().subscribe(data => {
      this.designs = data;
      console.log(data);
    })
  }

  delete(id){
    this.designservice.deleteDesign(id).subscribe(data => {
      console.log(data);
      this.getDesigns();
    });
  }

}
