import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { HotProductComponent } from './hot-product/hot-product.component';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, HotProductComponent, ListProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
