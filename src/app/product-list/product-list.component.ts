import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CartService } from '../cart.service';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  products = [];
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    this.cartService.clearCart();
    this.inventoryService.getInventory()
    .subscribe((res: any) => {
      this.products = res;
    });
  }


  addToCart(product: Product): void {
    this.cartService.addToCart(product.name, product.quantity);
    product.quantity = 0;
  
  }
}
