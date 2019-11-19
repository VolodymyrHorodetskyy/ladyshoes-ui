import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemrestService {

  url = 'http://localhost:8080/';
  public image: object;

  constructor(private http: HttpClient) {
  }

  getImage() {
    this.http.get(this.url + 'image', {responseType: 'blob'}).subscribe(response => {
      this.image = 'unsafe:data:image/JPEG;base64,' + response;
    });
  }

}
