import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POST_ORDER } from 'src/assets/environment/endpoints';
import { Payment } from './payment';
import { Product } from './products';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  postOrder(payment: Payment, shipping: Shipping, products: Product[]){
    return this.http.post(POST_ORDER, {
      product: products,
      shipping,
      payment
    });
  }

}