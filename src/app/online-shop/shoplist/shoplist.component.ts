import {Component, OnInit} from '@angular/core';
import {ItemrestService} from '../rest/itemrest.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ConfigurationService} from '../configuration.service';
import {Item} from '../rest/item';
import {BucketService} from '../../testnav/bucket.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  language: string;
  buy: string = 'Купити';
  items: Item[];
  moreDetails: string = 'Детальніше';

  constructor(public rest: ItemrestService, private route: ActivatedRoute, public holdService: ConfigurationService, private bucket: BucketService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.language = params.get('lan');
      this.holdService.language = this.language;
      if (this.language === 'ru') {
        this.buy = 'Купить';
        this.moreDetails = 'Подробнее';
      }
    });
    this.initItems();
  }

  initItems() {
    this.rest.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  onBuyClick(item: Item) {
    this.bucket.addItem(item);
  }

}
