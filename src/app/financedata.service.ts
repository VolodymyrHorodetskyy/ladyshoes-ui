import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancedataService {

  constructor(private http: HttpClient) {
  }

  getFinances() {
    return this.http.get('http://localhost:8080/finance');
  }

}
