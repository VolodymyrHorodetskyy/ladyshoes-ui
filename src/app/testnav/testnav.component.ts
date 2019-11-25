import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, of} from 'rxjs';
import {filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Event, NavigationEnd, ParamMap, Router} from '@angular/router';
import {ConfigurationService} from '../online-shop/configuration.service';
import {BucketService} from './bucket.service';

@Component({
  selector: 'app-testnav',
  templateUrl: './testnav.component.html',
  styleUrls: ['./testnav.component.css']
})
export class TestnavComponent implements OnInit {

  language: string;
  routePathParam: Observable<string>;
  navigationEnd: Observable<NavigationEnd>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  ngOnInit() {
  }

  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              private route: ActivatedRoute, private router: Router, public holdService: ConfigurationService,
              public bucketService: BucketService) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  onBucketClick(){
    console.log(this.bucketService.items);
  }

}
