import {Component, OnInit} from '@angular/core';
import {FinancedataService} from '../financedata.service';
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
  dataSource: Food[] = [
    {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];
  displayedColumns: string[] = ['amount', 'model', 'type'];


  constructor(private financesData: FinancedataService, private dialog: MatDialog, private financeRecordService: FinancerecordService) {
  }

  ngOnInit() {
    this.financesData.getFinances().subscribe(finance => {
      this.finances = finance;
      console.log(finance);
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(FinancerecordComponent);
  }

}
