import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '',component:CarComponent  },
  { path: 'cars',component:CarComponent  },
  { path: 'brands',component:BrandComponent  },
  { path: 'cardetails',component:CarDetailComponent  },
  { path: 'images',component:CarImageComponent  },
  { path: 'cars/brand/:brandId',component:CarComponent  },
  { path: 'cars/color/:colorId',component:CarComponent  },
  { path: 'cars/add',component:CarAddComponent ,canActivate:[LoginGuard] },
  { path: 'login',component:LoginComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
