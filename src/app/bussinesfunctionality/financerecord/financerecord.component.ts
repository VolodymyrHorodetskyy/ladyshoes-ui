import {Component, OnInit} from '@angular/core';
import {FinancerecordService} from '../service/financerecord.service';
import {FinancedataService} from '../rest/financedata.service';
import {Financerecordrequest} from '../rest/financerecordrequest';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-financerecord',
  templateUrl: './financerecord.component.html',
  styleUrls: ['./financerecord.component.css']
})
export class FinancerecordComponent implements OnInit {

  result: string;

  constructor(public financeRecordService: FinancerecordService, public financeData: FinancedataService,
              private dialogRef: MatDialogRef<FinancerecordComponent>) {
  }

  ngOnInit() {
  }

  onCreateClick() {
    const record = new Financerecordrequest();
    record.amount = this.financeRecordService.form.get('amount').value;
    record.type = this.financeRecordService.form.get('type').value;
    record.reasonsIds = this.financeRecordService.form.get('reason').value;
    this.financeData.postFinanceRecord(record).subscribe(response => {
        this.financeData.getFinances();
        this.dialogRef.close();
        this.financeRecordService.resetForm();
      },
      error => {
        this.result = error.error.message;
      }
    );
  }

  onReasonChange() {
    this.financeData.getReasons(this.financeRecordService.form.get('type').value);
  }
}
