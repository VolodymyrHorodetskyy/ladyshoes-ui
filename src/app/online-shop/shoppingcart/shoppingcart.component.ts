import {Component, OnInit} from '@angular/core';
import {BucketService} from '../../testnav/bucket.service';
import {Item} from '../rest/item';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  text: string;

  constructor(public bucket: BucketService) {
  }

  ngOnInit() {
  }

  onRemoveClick(item: Item) {
    this.bucket.removeItem(item);
    if (this.bucket.getItems().length <= 0) {
      this.text = 'Корзина пуста';
    }
  }


}
