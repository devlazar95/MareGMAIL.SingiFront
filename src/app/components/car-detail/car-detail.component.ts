import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  carId: any;
  loader: boolean = false;
  singleCar: any = {};
  constructor(private readonly _carService: CarsService,private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get('carId')) {
      this.carId = parseInt(this.route.snapshot.queryParamMap.get('carId'));
      this.init();
    }
  }

  async init(){
    this.loader = true;
    await this._carService.getCarByID(this.carId).toPromise().then((res)=>{
      this.singleCar = res;
      setTimeout(()=>{ 
        this.loader = false;
      },250)
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
