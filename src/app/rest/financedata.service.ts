import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Financerecordrequest} from './financerecordrequest';
import {error} from 'util';
import {FinancerecordComponent} from '../financerecord/financerecord.component';

@Injectable({
  providedIn: 'root'
})
export class FinancedataService {

  url = 'http://localhost:8080/finance';
  private result: string;
  finances: object;
  reasons: object;

  constructor(private http: HttpClient) {
    this.getFinances();
  }

  getFinances() {
    return this.http.get(this.url).subscribe(finance => {
      this.finances = finance;
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
    return this.http.get(this.url + '/reasons?inputFinanceType=' + type).subscribe(reasons => {
      this.reasons = reasons;
      console.log(reasons);
    });
  }

}
