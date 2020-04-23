import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-browsecloth',
  templateUrl: './browsecloth.component.html',
  styleUrls: ['./browsecloth.component.css']
})
export class BrowseclothComponent implements OnInit {
 cloths;

  constructor( private clothservice: ClothService) { }

  ngOnInit(): void {
    this.clothservice.getCloth().subscribe(data =>{
      console.log(data)
      this.cloths = data
    })
  }

}
