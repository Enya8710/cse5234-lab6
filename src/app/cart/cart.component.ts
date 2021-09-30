import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { payment } from '../payment';
import { UtilityService } from '../utility.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public utilityService: UtilityService,
    private formBuilder: FormBuilder
  ) { 
    this.price = this.utilityService.getTotalPrice();
  }
  items : Product[] = [];
  payment = payment;
  price = 0;
  // test = "test";
  ngOnInit(): void {
    this.cartService.clearCart();
    this.items = this.cartService.items;
    
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product.name, product.quantity);
    
    // product.quantity = 0;
  
  }
  removeItem(product: Product): void{
    this.cartService.removeItem(product.name, product.quantity);
  }

  
  

}
