import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ModalData} from './modaldata';

@Component({
  selector: 'app-financerecorddetails',
  templateUrl: './financerecorddetails.component.html',
  styleUrls: ['./financerecorddetails.component.css']
})
export class FinancerecorddetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FinancerecorddetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ModalData) {
  }

  ngOnInit() {
  }

}
