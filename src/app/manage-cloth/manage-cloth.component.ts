import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-manage-cloth',
  templateUrl: './manage-cloth.component.html',
  styleUrls: ['./manage-cloth.component.css']
})
export class ManageClothComponent implements OnInit {
cloths;
  constructor( private clothservice: ClothService) { }

  ngOnInit(): void {
    this.clothservice.getCloth().subscribe(data =>{
      console.log(data)
      this.cloths = data
    })
  }

}
