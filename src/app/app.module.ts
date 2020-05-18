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

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ListCarsComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,

  ],
  exports: [
    ListCarsComponent
  ],
  providers: [ApiService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
