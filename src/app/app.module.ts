import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { SummaryComponent } from './summary/summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ComfirmComponent } from './confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { UtilityService } from './utility.service';
import { CartComponent } from './cart/cart.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShippingInfoComponent,
    PaymentInfoComponent,
    SummaryComponent,
    ProductListComponent,
    ComfirmComponent,
    CartComponent,
    ProductListItemComponent,
    ProductItemComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'shipping', component: ShippingInfoComponent },
      { path: 'payment', component: PaymentInfoComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'confirm', component: ComfirmComponent },
      { path: 'cart', component: CartComponent},
      { path: 'product/:id', component: ProductPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
