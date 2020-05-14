import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  allCars: any;
  constructor(private _carsService: CarsService) { }

  ngOnInit() {
    this.init();
  }


  async init(){
    this.allCars = await this._carsService.getAll().toPromise();
  }

  showMore(carId: number){
    console.log(carId);
  }
}
