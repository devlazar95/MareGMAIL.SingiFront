import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './components/cars-components/cars/cars.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AddNewCarComponent } from './components/cars-components/add-new-car/add-new-car.component';
import { ListCarsComponent } from './components/cars-components/list-cars/list-cars.component';
import { ListOwnersComponent } from './components/owner/list-owners/list-owners.component';


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
      },
      {
        path: "add-new-car",
        component: AddNewCarComponent
      },
      {
        path: "cars",
        component: ListCarsComponent
      },
      {
        path: "owners",
        component: ListOwnersComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
