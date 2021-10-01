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
  item : Product;
  id: string | null;

  constructor(private cartService: CartService,
    private route: ActivatedRoute,
    private utilityService: UtilityService) {
    this.id = this.route.snapshot.paramMap.get('id');
    debugger;
    this.item = {} as Product;
    if(this.id != null){
      this.item = products[parseInt(this.id)];
    }
  }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    debugger;
    this.item = {} as Product;
    if(this.id != null){
      this.item = products[parseInt(this.id)];
    }
  }

}
