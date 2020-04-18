import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ErrorComponent } from "./error/error.component";
import { AdminComponent } from "./backend/admin/admin.component";
import { IndexComponent } from "./frontend/index/index.component";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  {
    path: "index",
    component: IndexComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "product/:id", component: ProductDetailComponent }
    ]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "manager", pathMatch: "full" },
      { path: "manager", component: ProductManagerComponent },
      { path: "product/:id", component: ProductDetailComponent }
    ]
  },
  { path: "manager", component: ProductManagerComponent },
  { path: "error", component: ErrorComponent },
  { path: "**", redirectTo: "error", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
