import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../configuration.service';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemrestService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient, private confServ: ConfigurationService) {
  }

  public getAllItems() {
    return this.http.get<Item[]>(this.url + 'item');
  }

  public getItem(id: number) {
    return this.http.get<Item>(this.url + 'item/' + id);
  }

}
