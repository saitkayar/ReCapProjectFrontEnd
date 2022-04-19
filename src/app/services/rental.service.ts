import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentAl } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44396/api/Rentals/getall"
  constructor(private httpClient:HttpClient) { }

  getRental():Observable<ListResponseModel<RentAl>>{
    return this.httpClient.get<ListResponseModel<RentAl>>(this.apiUrl);
  }
}
