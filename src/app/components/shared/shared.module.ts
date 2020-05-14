import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
