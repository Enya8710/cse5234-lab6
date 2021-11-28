import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { shipping } from '../shipping';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  shipping = shipping;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  onSubmit():void {
    shipping.id = Math.round(Math.random() * 10000);
  }
  submit():void{

  }

}
