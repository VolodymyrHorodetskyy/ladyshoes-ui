import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BusinessComponent} from './bussinesfunctionality/business/business.component';
import {ShoplistComponent} from './online-shop/shoplist/shoplist.component';

const routes: Routes = [
  {path: 'business', component: BusinessComponent},
  {path: '', component: ShoplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
