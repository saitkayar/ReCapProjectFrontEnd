import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardetailService } from 'src/app/services/cardetail.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
carAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private carService:CardetailService,private toastrService: ToastrService) { }

  ngOnInit(): void {this.createAddForm();
  }

  createAddForm(){
this.carAddForm=this.formBuilder.group({
  modelYear:["",Validators.required],
  dailyPrice:["",Validators.required],
  description:["",Validators.required],
  colorId:["",Validators.required],
  brandId:["",Validators.required],
})
  }
  add(){
    if (this.carAddForm.valid) {
      let carModel=Object.assign({},this.carAddForm.value) ;
      this.carService.add(carModel).subscribe(data=>{
       
        this.toastrService.success("araba Başarıyla eklendi") 
      },dataError=>{this.toastrService.error(dataError.error)});
    
    }else{
      this.toastrService.error("Formu Eksiksiz Doldurun")
    }
   
  }


}
