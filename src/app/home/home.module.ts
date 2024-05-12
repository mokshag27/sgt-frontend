import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ServicesComponent } from './services/services.component';
import { CartComponent } from './cart/cart.component';
import { WorkerTimeComponent } from './worker-time/worker-time.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    AllCategoriesComponent,
    SubCategoriesComponent,
    ServicesComponent,
    CartComponent,
    WorkerTimeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    WelcomeComponent,
    AllCategoriesComponent,
    SubCategoriesComponent,
    ServicesComponent,
    CartComponent,
    WorkerTimeComponent,
  ],
})
export class HomeModule {}
