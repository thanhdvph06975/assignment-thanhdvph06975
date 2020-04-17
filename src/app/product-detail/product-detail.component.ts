import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService : ProductService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() { this.getProduct();
  }
  product: product;

 getProduct(){
    this.activatedRoute.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data=>this.product=data)
    });
  }

}