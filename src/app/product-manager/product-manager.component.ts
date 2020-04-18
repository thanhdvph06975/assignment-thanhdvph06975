import { Component, OnInit } from "@angular/core";
import { product } from "../product";
import { ProductService } from "../product.service";
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  page=1;
  pageSize=5;
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
