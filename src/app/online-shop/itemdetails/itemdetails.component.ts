import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemrestService} from '../rest/itemrest.service';
import {Item} from '../rest/item';
import {Location} from '@angular/common';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  item: Item;
  imagesUrl = ['http://127.0.0.1:8887/picture_base/test/Lakeland_3442-2-400x300.jpg', 'http://127.0.0.1:8887/picture_base/test/lexus-is-05.jpg'];
  buy: string = 'Купити';
  inStock: string = 'В наявності';
  price: string = 'Ціна';

  constructor(private route: ActivatedRoute, private itemRest: ItemrestService, private _location: Location) {
  }

  ngOnInit() {
    //   this.imagesUrl = [];
    this.route.paramMap.subscribe(param => {
      this.itemRest.getItem(Number(param.get('id'))).subscribe(i => {
        this.item = i;
        if (param.get('lan') === 'ru') {
          this.buy = 'Купить';
          this.inStock = 'В наличии';
          this.price = 'Цена';
        }
      });
    });
  }

  onBackClick() {
    this._location.back();
  }

}
