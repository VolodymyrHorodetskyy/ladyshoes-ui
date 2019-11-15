import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './bussinesfunctionality/nav/nav.component';
import {BusinessComponent} from './bussinesfunctionality/business/business.component';
import {MatCardModule, MatGridListModule, MatSelectModule, MatTableModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FinancerecordComponent} from './bussinesfunctionality/financerecord/financerecord.component';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FinancerecorddetailsComponent } from './bussinesfunctionality/financerecorddetails/financerecorddetails.component';
import { ShoplistComponent } from './online-shop/shoplist/shoplist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BusinessComponent,
    FinancerecordComponent,
    FinancerecorddetailsComponent,
    ShoplistComponent
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
    MatSelectModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FinancerecordComponent, FinancerecorddetailsComponent]
})
export class AppModule {
}
