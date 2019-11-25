import {Injectable} from '@angular/core';
import {Item} from '../online-shop/rest/item';
import {isQuote} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  items: Item[] = [];

  constructor() {
  }

  addItem(item: Item) {
    this.items.push(item);
  }

}
