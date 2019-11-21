import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, of} from 'rxjs';
import {filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Event, NavigationEnd, ParamMap, Router} from '@angular/router';
import {ConfigurationService} from '../online-shop/configuration.service';

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
  /*  console.log('we start');
    this.navigationEnd = this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd));
    this.routePathParam = this.navigationEnd
      .pipe(
        map(() => this.route.root),
        map(root => root.firstChild),
        switchMap(firstChild => {
          if (firstChild) {
            console.log('here');
            console.log(firstChild.paramMap.pipe(map(paramMap => paramMap.get('lan'))));
          } else {
            console.log('not here');
            return of(null);
          }
        })
      );
  */}

  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              private route: ActivatedRoute, private router: Router, public holdService: ConfigurationService) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

}
