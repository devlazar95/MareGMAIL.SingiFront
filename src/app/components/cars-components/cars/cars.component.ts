import { Component, OnInit } from '@angular/core';
import { ManufacturersService } from 'src/app/services/manufacturers.service';
import { FuelsService } from 'src/app/services/fuels.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  
  allFuels: any;
  allOwners: any;
  allCategories: any;
  allManufacturers: any;

  constructor(private _manService: ManufacturersService, private _fuelService: FuelsService,
    private _catService: CategoriesService, private _ownerService: OwnersService) { }

  ngOnInit() {
    this.init();
  }

  async init(){
    localStorage.clear();
    this.allManufacturers = await this._manService.getAll().toPromise();
    this.allFuels = await this._fuelService.getAll().toPromise();
    this.allCategories = await this._catService.getAll().toPromise();
    this.allOwners = await this._ownerService.getAll().toPromise();
    localStorage.setItem('allManufacturers', JSON.stringify(this.allManufacturers));
    localStorage.setItem('allFuels', JSON.stringify(this.allFuels));
    localStorage.setItem('allCategories', JSON.stringify(this.allCategories));
    localStorage.setItem('allOwners', JSON.stringify(this.allOwners));
  }

}
