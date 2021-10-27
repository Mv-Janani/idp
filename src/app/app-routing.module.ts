import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakedGoodsComponent } from './baked-goods/baked-goods.component';
import { BlogComponent } from './blog/blog.component';

import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ErrorComponent } from './error/error.component';
import { FoodAndServeComponent } from './food-and-serve/food-and-serve.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'home',
    component:HomeComponent

  },{
    path:'books',
    component:BooksComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:"editorial",
    component:EditorialComponent
  },
  {
    path:'foodandserve',
    component:FoodAndServeComponent
  },
  {
    path:'baked goods',
    component:BakedGoodsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'loan',
    component:LoanComponent
  },
  {
    path:"**",
    component:ErrorComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
