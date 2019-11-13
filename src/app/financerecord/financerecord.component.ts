import {Component, OnInit} from '@angular/core';
import {FinancerecordService} from '../service/financerecord.service';


@Component({
  selector: 'app-financerecord',
  templateUrl: './financerecord.component.html',
  styleUrls: ['./financerecord.component.css']
})
export class FinancerecordComponent implements OnInit {


  constructor(private financeRecordService: FinancerecordService) {
  }

  ngOnInit() {
  }

  onCreateClick() {

  }


}
