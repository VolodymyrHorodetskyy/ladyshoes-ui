import {Component, OnInit} from '@angular/core';
import {ItemrestService} from '../rest/itemrest.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  language: string;


  constructor(public rest: ItemrestService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let lan = params.get('lan');
      this.language = lan;
    });
    this.rest.getImage();
  }

}
