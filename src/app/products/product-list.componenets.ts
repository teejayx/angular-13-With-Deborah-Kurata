import { Component, OnDestroy, OnInit  } from "@angular/core";
import { Subscription } from "rxjs";
import { IProducts } from "./IProducts";
import { ProductService } from "./Product.Service";


@Component({
     selector: 'pm-products',
     templateUrl : './product-list.component.html'
})

export class ProductListComponent implements OnInit, OnDestroy{
   pageTitle: string = 'Product List';
    showImage: boolean = false;
    errorMessage: string = ''
    sub!: Subscription;
    private _listFilter : string = '';

   constructor(private productService: ProductService){

    productService = productService;
   }


   ngOnInit(): void {
      this.sub = this.productService.getProduct().subscribe({
        next: products => {this.products = products;
           this.filteredProducts = this.products;
        },
        error: err => this.errorMessage
       });
    }


   ngOnDestroy(): void {
     this.sub.unsubscribe();
   }

 



 get listFilter(): string {
    return this._listFilter;
 }

 set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);

 }

 filteredProducts: IProducts[] = [];



    products: IProducts[] = [];

    toggleImage() : void {
        this.showImage = !this.showImage;

    }

    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

  
     onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message

     }
}