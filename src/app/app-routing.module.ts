import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './components/cars-components/cars/cars.component';


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "", component: CarsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
