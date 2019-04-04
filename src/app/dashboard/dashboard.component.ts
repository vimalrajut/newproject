import { Component, OnInit } from '@angular/core';
import { Service } from '../_services/services';
import { DataService } from '../_util/dataServices'
import { dashBoardDetails } from '../_model/dashBoardDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  soldAmount: Number
  vendors: Number
  items: Number
  itemBought = [];

  constructor(private service: Service, private dataService: DataService) {
    //console.log(new dashBoardDetails());
  }

  ngOnInit() {

    this.dataService.dashBoardDataObrData.subscribe(datasBoardData => {
      console.log("dash",datasBoardData);
      this.soldAmount =datasBoardData['soldAmount'];
      this.vendors = datasBoardData['vendors'];
      this.items = datasBoardData['items'];


      datasBoardData['productBoughtVo'].forEach(element => {
        let tempItem = {'itemName':element.itemName,
        'itemNoOfPurchese': element.noOfOrders
        }
        this.itemBought.push(tempItem);
      });

     // this.itemBought = { datasBoardData['topItemBought'];
    });
    
   // this.service.getDashBoardDetails().subscribe(
     // data => {
        //this.marketData = data['marketSnapshot'];
        // this.itemBought = data['topItemsBought'];
     // })
  }



}
