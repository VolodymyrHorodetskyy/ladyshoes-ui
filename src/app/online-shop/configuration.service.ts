import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public picPath: string = 'http://127.0.0.1:8887/picture_base/';
  public urlRest: string = 'http://localhost:8080/';

  constructor() {
  }
}