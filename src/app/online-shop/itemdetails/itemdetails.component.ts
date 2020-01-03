import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemrestService} from '../rest/itemrest.service';
import {Item} from '../rest/item';
import {Location} from '@angular/common';
import {BucketService} from '../../testnav/bucket.service';
import {ConfigurationService} from '../configuration.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  item: Item;
  buy: string = 'Купити';
  inStock: string = 'В наявності';
  price: string = 'Ціна';

  constructor(private route: ActivatedRoute, public itemRest: ItemrestService, private _location: Location,
              private bucketService: BucketService, private configurationService: ConfigurationService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.itemRest.getItemDescriptionText(param.get('lan'));
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

  onBuyClick(item: Item) {
    console.log(item);
    this.bucketService.addItem(item);
  }

}
