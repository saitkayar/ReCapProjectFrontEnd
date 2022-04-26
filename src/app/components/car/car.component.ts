import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  filterText = ""
  constructor(private carDetailService: CardetailService, private activatedRote: ActivatedRoute, private toastrService: ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRote.params.subscribe(params => {
      if (params["brandId"]) {
        this.getcarbybrand(params["brandId"])
      } else if (params["colorId"]) {
        this.getCarByColor(params["colorId"])

      } else {
        this.getCar();
      }
    });

  }

  getCar() {
    this.carDetailService.getCar().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getcarbybrand(brandId: number) {
    this.carDetailService.getCarByBrand(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;

    })
  }

  getCarByColor(colorId: number) {
    this.carDetailService.getCarByColor(colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  addToCart(car:Car) {

    this.toastrService.success("Sepete eklendi", car.description);
    this.cartService.addToCart(car);

  }
}
