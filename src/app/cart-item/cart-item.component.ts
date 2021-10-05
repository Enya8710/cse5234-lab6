import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../products";
import { CartService } from '../cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  @Input() editable = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product.name, product.quantity);
  }
  removeItem(product: Product): void{
    this.cartService.removeItem(product.name, product.quantity);
  }

}
