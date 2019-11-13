import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FinancerecordService {

  form: FormGroup = new FormGroup({
    amount: new FormControl('')
  });

  constructor() {
  }
}
