import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
cars:Car[]=[];
dataLoaded=false;
filterText=""
  constructor(private carDetailService:CardetailService,private activatedRote:ActivatedRoute) { }

  ngOnInit(): void { this.activatedRote.params.subscribe(params => {
    if (params["brandId"]) {
      this.getcarbybrand(params["brandId"])
    } else if(params["colorId"]){
      this.getCarByColor(params["colorId"])

    } else {
      this.getCar();
    }
  });

  }

  getCar(){
this.carDetailService.getCar().subscribe(response=>{this.cars=response.data
  this.dataLoaded=true;})
  }
getcarbybrand(brandId:number){this.carDetailService.getCarByBrand(brandId).subscribe(response=>{this.cars=response.data
  this.dataLoaded=true;

})}

getCarByColor(colorId:number){this.carDetailService.getCarByColor(colorId).subscribe(response=>{this.cars=response.data
  this.dataLoaded=true;})}
}
