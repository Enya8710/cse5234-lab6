import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab6';

  constructor(private cartService: CartService){

  }

  getNumCartItems(){
    return this.cartService.getTotalCartItemCount();
  }
}
