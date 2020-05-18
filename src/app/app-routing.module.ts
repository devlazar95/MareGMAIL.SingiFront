import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './components/cars-components/cars/cars.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "", component: CarsComponent
      },
      {
        path: "car-detail",
        component: CarDetailComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
