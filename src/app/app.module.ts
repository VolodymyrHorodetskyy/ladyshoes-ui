import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {BusinessComponent} from './business/business.component';
import {MatSelectModule, MatTableModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FinancerecordComponent} from './financerecord/financerecord.component';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FinancerecorddetailsComponent } from './financerecorddetails/financerecorddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BusinessComponent,
    FinancerecordComponent,
    FinancerecorddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FinancerecordComponent, FinancerecorddetailsComponent]
})
export class AppModule {
}
