import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./header/header.component";
import { HotProductComponent } from "./hot-product/hot-product.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { ProductService } from "./product.service";
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './backend/admin/admin.component';
import { IndexComponent } from './frontend/index/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,NgbModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    HotProductComponent,
    ListProductComponent,
    HomeComponent,
    ProductManagerComponent,
    ProductDetailComponent,
    ErrorComponent,
    AdminComponent,
    IndexComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
