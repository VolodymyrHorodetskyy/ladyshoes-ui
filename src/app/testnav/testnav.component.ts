import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {MatIconRegistry, MatSnackBar} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {BucketService} from './bucket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-testnav',
  templateUrl: './testnav.component.html',
  styleUrls: ['./testnav.component.css']
})
export class TestnavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  ngOnInit() {
  }

  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              private snackBar: MatSnackBar, private bucket: BucketService, private router: Router) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  onShoppingCartClick() {
    if (this.bucket.getItems().length <= 0) {
      this.snackBar.open('Корзина пуста', '', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    } else {
      this.router.navigate(['items/shoppingcart']);
    }

  }

}
