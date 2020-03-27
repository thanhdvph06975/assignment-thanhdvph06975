import { Component, OnInit } from "@angular/core";
import { product } from "../product";
import { ProductService } from "../product.service";
@Component({
  selector: "app-hot-product",
  templateUrl: "./hot-product.component.html",
  styleUrls: ["./hot-product.component.css"]
})
export class HotProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  products: product[];
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
