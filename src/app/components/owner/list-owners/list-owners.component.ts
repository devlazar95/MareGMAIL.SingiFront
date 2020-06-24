import { Component, OnInit } from '@angular/core';
import { OwnersService } from 'src/app/services/owners.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.scss']
})
export class ListOwnersComponent implements OnInit {

  allOwners: any;
  constructor(private modalService: NgbModal, private _ownerService: OwnersService) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    this.allOwners = await this._ownerService.getAll().toPromise();
  }
  closeResult = '';

  addNewOwner(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async deleteOwner(ownerID){
    await this._ownerService.deleteOwner(ownerID).toPromise();
    this.allOwners = await this._ownerService.getAll().toPromise()
  }

  refreshOwnerList(){
    this.modalService.dismissAll();
    this.getOwners();
  }
  async getOwners(){
    this.allOwners = await this._ownerService.getAll().toPromise();
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
