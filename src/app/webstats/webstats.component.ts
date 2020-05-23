import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';
import { DesignerService } from '../designer.service';
import { DesignService } from '../design.service';
import * as CanvasJs from '../../assets/canvasjs.min.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-webstats',
  templateUrl: './webstats.component.html',
  styleUrls: ['./webstats.component.css']
})
export class WebstatsComponent implements OnInit {

  users;
  designs;
  orders;
  designers;

  regData;
  ordData;
  chartview = 'users';
  count;
  dataPoints=[];


  constructor(private designservice: DesignService, private userservice: UserService, private orderservice: OrderService,
    private designerservice: DesignerService) { }

  ngOnInit(): void {
    this.getDesigns();
    this.getDesigners();
    this.getDesigners();
    this.getUsers();
    
  }

  getDesigns(){
    this.designservice.getDesigns().subscribe(data => {
      console.log(data);
      this.designs = data;
    })
  }

  getUsers(){
    this.userservice.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
      this.prepareRegData(this.users);
    })
  }

  getOrders(){
    this.orderservice.getAllOrders().subscribe(data => {
      console.log(data);
      this.orders = data;
    })
  }

  getDesigners(){
    this.designerservice.getDesigners().subscribe(data => {
      console.log(data);
      this.designers = data;
    })
  }

  viewUsers(){
    this.prepareRegData(this.users);
  }

  viewOrders(){
    this.prepareOrdData(this.orders);
  }

  viewDesigners(){
    this.prepareProdData(this.designers);
  }

  drawchart(datapoints, title, unit, xlabel){
    var chart = new CanvasJs.Chart("regByDate", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: title
      },
      axisY: {
        title: xlabel,
        titleFontSize: 24
      },
      data: [{
        type: "column",
        yValueFormatString: `#,### ${unit}`,
        dataPoints: datapoints
      }]
    });
    chart.render();

  }

  prepareRegData(users){
    this.getDatewiseValues(users, 'created').subscribe(data => {
      console.log(data);
      this.regData = data;
      this.drawchart(this.regData, 'Registration Data', 'registrations', 'No. of Registrations');
    })
  }

  prepareOrdData(orders){
    this.getDatewiseValues(orders, 'created').subscribe(data => {
      console.log(data);
      this.ordData = data;
      this.drawchart(this.ordData, 'Model Purchases', 'orders', 'No. of Orders');
    })
  }

  prepareProdData(products){
    this.getDatewiseValues(products, 'created').subscribe(data => {
      console.log(data);
      this.ordData = data;
      this.drawchart(this.ordData, '3D Models Uploads', 'Uploads', 'No. of Orders');
    })
  }

  prepareSellerData(sellers){
    this.getDatewiseValues(sellers, 'created').subscribe(data => {
      console.log(data);
      this.ordData = data;
      this.drawchart(this.ordData, 'Sellers Registerations', 'orders', 'No. of Orders');
    })
  }

  getDatewiseValues(records, colname){
    return Observable.create(observer => {
      let datewise = [];
      this.getUniqueValues(colname, records).subscribe(unique_values => {
        for(let value of unique_values[1]){
          datewise.push({x: new Date(value), y: this.getCount(unique_values[0], value)})
        }
        observer.next(datewise);
      })
    })

  }

  getUniqueValues(col_name, data){
    // console.log(col_name+' '+data);
    return Observable.create( observer => {
      let values = data.map( ele => {
        let date = new Date(ele[col_name]).setHours(0, 0, 0, 0);
        // console.log(new Date(date).getTime());
        return new Date(date).getTime();
      })

      let uniquevalues = []
      for(let value of values){
        if(!uniquevalues.includes(value)){
          uniquevalues.push(value);
          // console.log(value);
        }
      }
      observer.next([values, uniquevalues]);
    })
  }

  getCount(records, item){
    let count = 0;
    for(let record of records){
      if(record == item){
        count++;
      }
    }

    return count;
  }
  

}

