import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AllCategoriesComponent } from './home/all-categories/all-categories.component';
import { SubCategoriesComponent } from './home/sub-categories/sub-categories.component';
import { ServicesComponent } from './home/services/services.component';
import { CartComponent } from './home/cart/cart.component';

const routes: Routes = [
  {
    path:'home',
    component:WelcomeComponent
  },
  {
    path:'categories',
    component:AllCategoriesComponent
  },

  {
    path:'sub-categories',
    component:SubCategoriesComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'view-cart',
    component:CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
