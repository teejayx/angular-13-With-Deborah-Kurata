import { Component  } from "@angular/core";
import { IProducts } from "./IProducts";


@Component({
     selector: 'pm-products',
     templateUrl : './product-list.component.html'
})

export class ProductListComponent{
    pageTitle: string = 'Product List';
    showImage: boolean = false;


 private _listFilter : string = '';
 get listFilter(): string {
    return this._listFilter;
 }

 set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);

 }

 filteredProducts: IProducts[] = [];



    products: IProducts[] = [
        {
            "productId" : 2,
            "productName" : "StarLink",
            "productCode" : "Gn-0023",
            "price" : 32.99,
            "starRating" : 4.2,
            "releaseDate" : "March 18, 2012"
        },
        {
            "productId" : 3,
            "productName" : "Iphone",
            "productCode" : "Gn-0023",
            "price" : 3.99,
            "starRating" : 4.2,
            "releaseDate" : "March 18, 2012"
        },
        {
            "productId" : 4,
            "productName" : "wheel cart",
            "productCode" : "Gn-0023",
            "price" : 10.99,
            "starRating" : 4.2,
            "releaseDate" : "March 18, 2023"
        }
    ];

    toggleImage() : void {
        this.showImage = !this.showImage;

    }

    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

     ngOnInit(): void {
        this.listFilter = 'cart';
     }

     onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message

     }
}