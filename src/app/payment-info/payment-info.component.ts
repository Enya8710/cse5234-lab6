import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { payment } from '../payment';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})

export class PaymentInfoComponent {
  payment = payment;
  price = 0;
  test = "test";
  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService
  ) {
    this.price = this.utilityService.getTotalPrice();
  }

  onSubmit(){
    this.payment.id = Math.round(Math.random() * 10000);
  }
}
