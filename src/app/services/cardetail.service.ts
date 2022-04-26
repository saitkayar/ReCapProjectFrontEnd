import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {
apiUrl="https://localhost:44396/api/"
  constructor(private httpClient:HttpClient) { }

  getcardetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCar():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarbybrand?brandId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(car:Car){
    return this.httpClient.post(this.apiUrl+"Cars/add",car,{responseType: 'text'})
  }
}
