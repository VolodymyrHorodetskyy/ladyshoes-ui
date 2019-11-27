import {Component, OnInit} from '@angular/core';
import {BucketService} from '../../testnav/bucket.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private bucket: BucketService) {
  }

  ngOnInit() {
  }

}
