import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AllCategoriesComponent } from './home/all-categories/all-categories.component';
import { SubCategoriesComponent } from './home/sub-categories/sub-categories.component';
import { ServicesComponent } from './home/services/services.component';
import { CartComponent } from './home/cart/cart.component';
import { WorkerTimeComponent } from './home/worker-time/worker-time.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: WelcomeComponent,
  },
  {
    path: 'categories',
    component: AllCategoriesComponent,
  },

  {
    path: 'sub-categories/:category_id',
    component: SubCategoriesComponent,
  },
  {
    path: 'services/:subcategory_id',
    component: ServicesComponent,
  },
  {
    path: 'view-cart',
    component: CartComponent,
  },
  {
    path: 'worker-time',
    component: WorkerTimeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
