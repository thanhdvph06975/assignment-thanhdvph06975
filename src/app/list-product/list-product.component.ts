import { Component, OnInit } from "@angular/core";
import { product } from "../product";
import { ProductService } from "../product.service";
@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"]
})
export class ListProductComponent implements OnInit {
  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  products: product[];
  getProducts() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
