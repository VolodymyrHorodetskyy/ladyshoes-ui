import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../configuration.service';
import {Item} from './item';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ItemrestService {

  private url: string = 'http://localhost:8080/';
  public itemDescription: SafeHtml;

  constructor(private http: HttpClient, private confServ: ConfigurationService, private sanitizer: DomSanitizer) {
  }

  public getAllItems() {
    return this.http.get<Item[]>(this.url + 'item');
  }

  public getItem(id: number) {
    return this.http.get<Item>(this.url + 'item/' + id);
  }

  public getItemDescriptionText(language: string) {
    this.http.get(this.url + '/text/itemDescription/' + language, {responseType: 'text'}).subscribe(
      text => {
        this.itemDescription = this.sanitizer.bypassSecurityTrustHtml(text);
      }
    );
  }

}
