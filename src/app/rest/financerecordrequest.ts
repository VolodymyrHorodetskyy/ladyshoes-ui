import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Financerecordrequest {
  amount: number;
  type: string;
  reasonsIds: object;
}
