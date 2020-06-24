import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {NgbModal, NgbDate, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AddNewOwnerComponent } from '../../popups/add-new-owner/add-new-owner.component';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {
  newCar: FormGroup;
  allFuels: any;
  allCategories: any;
  allOwners: any;
  allManufacturers: any;


  constructor(
    private _fb: FormBuilder,
    private modalService: NgbModal, 
    private _ownerService: OwnersService
  ) { 
    this.newCar = this._fb.group({
      carNumber: ['', Validators.required],
      carColor: [''],
      carName: [''],
      carYear: [''],
      fuelSelect: [''],
      carCategory: [''],
      carManufacturer: [''],
      carOwner: [''],
    })
  }

  ngOnInit() {
    this.allFuels = JSON.parse(localStorage.getItem('allFuels'));
    this.allCategories = JSON.parse(localStorage.getItem('allCategories'));
    this.allOwners = JSON.parse(localStorage.getItem('allOwners'));
    this.allManufacturers = JSON.parse(localStorage.getItem('allManufacturers'));
    console.log(this.allFuels);
  }
  closeResult = '';

  addNewOwner(content){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
