import {Injectable} from '@angular/core';
import {Item} from '../online-shop/rest/item';
import {isQuote} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  items: Item[] = [];

  constructor() {
    this.updateItems();
  }

  addItem(item: Item) {
    let items = this.getItems();
    if (typeof items !== 'undefined' && items.length > 0) {
      items.push(item);
    } else {
      items = [];
      items.push(item);
    }
    localStorage.setItem('items', JSON.stringify(items));
    this.updateItems();
  }

  removeItem(item: Item) {
    const items = this.getItems();
    items.splice(items.indexOf(item));
    localStorage.setItem('items', JSON.stringify(items));
    this.updateItems();
  }

  getItems(): Item[] {
    return JSON.parse(localStorage.getItem('items'));
  }

  updateItems() {
    this.items = this.getItems();
  }

}
