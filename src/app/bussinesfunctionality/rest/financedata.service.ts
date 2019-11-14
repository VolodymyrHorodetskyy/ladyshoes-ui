import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Financerecordrequest} from './financerecordrequest';
import {error} from 'util';
import {FinancerecordComponent} from '../financerecord/financerecord.component';

@Injectable({
  providedIn: 'root'
})
export class FinancedataService {

  url = 'http://localhost:8080/finance/';
  private result: string;
  finances: object;
  reasons: object;
  currentSum: number;

  constructor(private http: HttpClient) {
    this.getFinances();
    this.getCurrentSum();
  }

  getFinances() {
    return this.http.get(this.url).subscribe(finance => {
      this.finances = finance;
      this.getCurrentSum();
    });
  }

  postFinanceRecord(financeRecord: Financerecordrequest) {
    this.result = '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {headers: headers};
    return this.http.post(this.url, financeRecord, options);
  }

  getReasons(type: string) {
    return this.http.get(this.url + 'reasons?inputFinanceType=' + type).subscribe(reasons => {
      this.reasons = reasons;
      console.log(reasons);
    });
  }

  getFinanceRecord(id: number) {
    return this.http.get(this.url + id);
  }

  removeFinanceRecord(id: number) {
    return this.http.delete(this.url + id);
  }

  getCurrentSum() {
    return this.http.get(this.url + 'currentSum').subscribe(sum => {
      this.currentSum = sum;
    });
  }

}
