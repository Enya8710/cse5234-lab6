import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  //non-null assertions are used here to link the id of the products to
  //the actual products. changes need to be made so that this is not the case
  item: Product;
  id: string;

  constructor(private cartService: CartService,
    private route: ActivatedRoute,
    private utilityService: UtilityService) {
    this.id = this.route.snapshot.paramMap.get('id')!; 
    debugger;
    this.item = {} as Product;
    if(this.id != null){
      this.item = products.find(item => item.id == parseInt(this.id))!;
    }
  }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    debugger;
    this.item = {} as Product;
    if(this.id != null){
      this.item = products.find(item => item.id == parseInt(this.id))!;
    }
  }

  addToCart(): void {
    this.cartService.addToCart(this.item.name, 1);
  }

}
