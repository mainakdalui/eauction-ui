import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Bid } from './model/bid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eauction';
  productId: string;
  bidList = Array<Bid>();

  columnHeader: string[] = ['startingPrice', 'shortDesc', 'detailDesc', 'category', 'bidEndDate'];

  constructor(private api: ApiService) {
    this.productId = '';
    this.bidList = [];
  }

  getBidList() {
    console.log('for product id - ', this.productId);
    this.bidList = [];
    // call service to make api call to get list of bid
    this.api.getAllBidsByProductId(this.productId).subscribe((
      data) => {
      this.bidList = data;
      console.log('bid list - ', this.bidList);
    }, err => {
      console.log(`error occurred while fetching bid for product ${err}`);
      console.log('error details: ', err);
      alert('error occurred, see console log for error details');
    });
  }

}
