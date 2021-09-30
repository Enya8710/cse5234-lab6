import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input()
  product!: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.product?.description)
  }

  addToCart(): void {
    this.cartService.addToCart(this.product.name, 1);
  }

}
