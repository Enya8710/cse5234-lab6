import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_INVENTORY, GET_INVENTORY_HOSTED } from '../assets/environment/endpoints';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory(){
    return this.http.get(GET_INVENTORY_HOSTED);
  }
}
