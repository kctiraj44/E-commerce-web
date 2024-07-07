import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes =[
    {path: 'category/:id',component: ProductListComponent},
    {path: 'category',component: ProductListComponent},
    {path: 'products',component: ProductListComponent},
    {path: '',redirectTo:'/products',pathMatch:'full'},
    {path: '**',redirectTo:'/products',pathMatch:'full'},


]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductListComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
