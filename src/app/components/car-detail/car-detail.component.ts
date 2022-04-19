import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cardetails:CarDetail[]=[]
  constructor(private cardetailService:CardetailService) { }

  ngOnInit(): void {this.getcardetails()
  }
  getcardetails(){
    this.cardetailService.getcardetails().subscribe(response=>{this.cardetails=response.data})
  }

}
