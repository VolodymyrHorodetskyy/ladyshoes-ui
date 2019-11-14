import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ModalData} from './modaldata';
import {FinancedataService} from '../rest/financedata.service';

@Component({
  selector: 'app-financerecorddetails',
  templateUrl: './financerecorddetails.component.html',
  styleUrls: ['./financerecorddetails.component.css']
})
export class FinancerecorddetailsComponent implements OnInit {

  financeRecord: object;
  private data: ModalData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData, private financeData: FinancedataService, private refDialog: MatDialogRef<FinancerecorddetailsComponent>) {
    this.data = data;
  }

  ngOnInit() {
    this.financeData.getFinanceRecord(this.data.id).subscribe(record => {
      this.financeRecord = record;
    });
  }

  onRemoveClick() {
    this.financeData.removeFinanceRecord(this.financeRecord.id).subscribe(record => {
      this.refDialog.close();
      this.financeData.getFinances();
    });
  }

}
