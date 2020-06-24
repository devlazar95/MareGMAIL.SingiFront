import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'add-new-owner-popup',
  templateUrl: './add-new-owner.component.html',
  styleUrls: ['./add-new-owner.component.scss']
})
export class AddNewOwnerComponent implements OnInit {

  newOwner: FormGroup;
  allOwners: any;
  @Output("on-add-owner") onOwnerAdd: EventEmitter<any> = new EventEmitter();


  constructor( private _fb: FormBuilder, private _ownerService: OwnersService) {
    this.newOwner = this._fb.group({
      ownerName: ['', Validators.required],
      ownerLastName: ['', Validators.required],
      ownerCity: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  async sendOwnerData(){
    if (this.newOwner.valid){
      let ownerObj = {
        name: this.newOwner.controls.ownerName.value,
        lastName: this.newOwner.controls.ownerLastName.value,
        city: this.newOwner.controls.ownerCity.value
      }
      
      if (ownerObj !== undefined){
        await this._ownerService.addNewOwner(ownerObj).toPromise();
        if(location.pathname === "/owners"){
          this.allOwners = await this._ownerService.getAll().toPromise();
          localStorage.removeItem('allOwners');
          localStorage.setItem('allOwners', JSON.stringify(this.allOwners));
          this.onOwnerAdd.emit();
        }
      }
    }
  }

}
