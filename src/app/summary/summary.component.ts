import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import {PaymentService} from '../payment.service';
import { payment } from '../payment';
import { shipping } from '../shipping';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  products;

  //shipping and payment aren't saved
  shipping = shipping;
  payment = payment;
  price: number;
  constructor(public utilityService: UtilityService, private cartService: CartService, private orderService: OrderService,private paymentService:PaymentService) {
    this.price = utilityService.getTotalPrice();
    cartService.session_open = false;
    this.products = cartService.items;
  }

  ngOnInit(): void {
  }

  postOrder(): void {
    this.orderService.postOrder(this.payment, this.shipping, this.products)
    .subscribe((res: any) => {
      this.products = res;
    },
    (err: any) => {
      alert("Error submitting");
    });
  }
  postPayment(): void {
    this.paymentService.postPayment(this.payment)
  }
}
