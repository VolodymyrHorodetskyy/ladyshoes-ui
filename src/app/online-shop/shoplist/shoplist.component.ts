import {Component, OnInit} from '@angular/core';
import {ItemrestService} from '../rest/itemrest.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ConfigurationService} from '../configuration.service';
import {Item} from '../rest/item';
import {BucketService} from '../../testnav/bucket.service';
import {GetAllItemsResponse} from '../rest/GetAllItemsResponse';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  language: string;
  buy = 'Купити';
  items: Item[];
  moreDetails = 'Детальніше';
  amount: number;

  constructor(public rest: ItemrestService, private route: ActivatedRoute, public configurationService: ConfigurationService, private bucket: BucketService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.language = params.get('lan');
      this.configurationService.language = this.language;
      if (this.language === 'ru') {
        this.buy = 'Купить';
        this.moreDetails = 'Подробнее';
      }
    });
    this.getAllItems();
  }

  getAllItems(pageEvent?: PageEvent) {
    if (pageEvent != null) {
      this.rest.getAllItems(pageEvent.pageIndex).subscribe(getAllItemsResponse => {
        this.amount = getAllItemsResponse.itemsAmount;
        this.items = getAllItemsResponse.items;
      });
    } else {
      this.rest.getAllItems().subscribe(getAllItemsResponse => {
        this.amount = getAllItemsResponse.itemsAmount;
        this.items = getAllItemsResponse.items;
      });
    }
  }

  onBuyClick(item: Item) {
    this.bucket.addItem(item);
  }

}
