import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  loader: boolean = false;
  allCars: any;
  constructor(private _carsService: CarsService, private _router: Router) { }

  ngOnInit() {
    this.init();
  }


  async init(){
    this.loader = true;
    await this._carsService.getAll().toPromise().then((res)=>{
      this.allCars = res;
      setTimeout(()=>{
        this.loader = false;
      },250)
    });
  }

  showMore(carId: number){
    this._router.navigate(["car-detail/"], {
      queryParams: { carId: carId }
    });
  }
}
