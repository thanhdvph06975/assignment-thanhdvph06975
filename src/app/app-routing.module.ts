import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './backend/admin/admin.component';
import { IndexComponent } from './frontend/index/index.component';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent,
  children:[
    { path: 'manager', component: ProductManagerComponent }
  ]
   },
   { path: 'index', component: IndexComponent },
  { path: 'manager', component: ProductManagerComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo:'error',pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
