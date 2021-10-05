import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_INVENTORY } from '../assets/environment/endpoints';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory(){
    return this.http.get(GET_INVENTORY)
    .pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(() => of([])));
  }
}
