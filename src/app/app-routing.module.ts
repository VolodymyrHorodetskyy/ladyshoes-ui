import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BusinessComponent} from './bussinesfunctionality/business/business.component';
import {ShoplistComponent} from './online-shop/shoplist/shoplist.component';
import {ItemdetailsComponent} from './online-shop/itemdetails/itemdetails.component';
import {ShoppingcartComponent} from './online-shop/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {path: 'business', component: BusinessComponent},
  {path: ':lan', component: ShoplistComponent},
  {path: '', component: ShoplistComponent},
  {path: 'detail/:id', component: ItemdetailsComponent},
  {path: ':lan/detail/:id', component: ItemdetailsComponent},
  {path: 'items/shoppingcart', component: ShoppingcartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
