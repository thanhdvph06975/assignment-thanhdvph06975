import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./header/header.component";
import { HotProductComponent } from "./hot-product/hot-product.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { ProductService } from "./product.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    HotProductComponent,
    ListProductComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
