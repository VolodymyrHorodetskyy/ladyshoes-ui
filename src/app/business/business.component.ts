import {Component, OnInit} from '@angular/core';
import {FinancedataService} from '../rest/financedata.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {FinancerecordComponent} from '../financerecord/financerecord.component';
import {FinancerecordService} from '../service/financerecord.service';

export interface Food {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  finances: Object;
  displayedColumns: string[] = ['amount', 'reasons', 'type'];


  constructor(private financesData: FinancedataService, private dialog: MatDialog, private financeRecordService: FinancerecordService) {
  }

  ngOnInit() {
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(FinancerecordComponent);
  }

  onRow(ob: object) {
    console.log(ob);
  }

}
