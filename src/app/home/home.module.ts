import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ServicesComponent } from './services/services.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    AllCategoriesComponent,
    SubCategoriesComponent,
    ServicesComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports:
  [
    WelcomeComponent


  ]
})
export class HomeModule { }
