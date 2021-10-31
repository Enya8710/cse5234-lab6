import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POST_PAYMENT_HOSTED } from 'src/assets/environment/endpoints';
import { Payment } from './payment';
import { Product } from './products';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  postOrder(payment: Payment){
    return this.http.post(POST_PAYMENT_HOSTED, {
      payment,
    });
  }

}