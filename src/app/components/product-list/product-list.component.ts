import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

 currentCategoryId!: number;
  products: Product[] = [];


  constructor(private productService: ProductService, private route: ActivatedRoute){}


  ngOnInit() {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    });
  
  }

  listProducts(){

    //check if "id" avaible or not
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      //get the id and param string and convert the srting into the number using +symbol
      this.currentCategoryId=+this.route.snapshot.paramMap.get('id')!;
    }

    else{
      //not category id avavialbe  ..... deafult to categort id 1
      this.currentCategoryId =1;
    }

    //now get the products  for given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data=>{
        this.products =data;
      }
    )
  }

}
