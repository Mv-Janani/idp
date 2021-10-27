import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { EditorialComponent } from './editorial/editorial.component';

import { BakedGoodsComponent } from './baked-goods/baked-goods.component';
import { FoodAndServeComponent } from './food-and-serve/food-and-serve.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { LoanComponent } from './loan/loan.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BooksComponent,
    BlogComponent,
    MainComponent,
    EditorialComponent,

    BakedGoodsComponent,
    FoodAndServeComponent,
    ContactComponent,
    ErrorComponent,
    LoanComponent,
    AComponent,
    BComponent,
    CComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
