import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { ApiService } from './services/api.service';
import { CarsComponent } from './components/cars-components/cars/cars.component';
import { ListCarsComponent } from './components/cars-components/list-cars/list-cars.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './services/cars.service';
import { RouterModule } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AddNewCarComponent } from './components/cars-components/add-new-car/add-new-car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManufacturersService } from './services/manufacturers.service';
import { FuelsService } from './services/fuels.service';
import { CategoriesService } from './services/categories.service';
import { OwnersService } from './services/owners.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewOwnerComponent } from './components/popups/add-new-owner/add-new-owner.component';
import { ListOwnersComponent } from './components/owner/list-owners/list-owners.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ListCarsComponent,
    CarDetailComponent,
    AddNewCarComponent,
    AddNewOwnerComponent,
    ListOwnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    RouterModule,

    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ListCarsComponent
  ],
  providers: [ApiService, CarsService, ManufacturersService, FuelsService, CategoriesService, OwnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
