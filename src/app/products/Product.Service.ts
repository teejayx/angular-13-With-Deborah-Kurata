import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, throwError } from "rxjs";
import { IProducts } from "./IProducts";

@Injectable({
    providedIn: 'root'
})
export class ProductService {


    private productUrl = 'api/products.json';
    constructor(private http: HttpClient){
     
    }
   

    getProduct() : Observable<IProducts[]> {

        return this.http.get<IProducts[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data)), catchError(this.handleError))
        );

    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = ''
         if(err.error instanceof ErrorEvent){
            errorMessage = `an error occured: ${err.error.message}`;

         }else{
            errorMessage = `Server returned code: ${err.status}, errror message us : ${err.message}`
         }
         console.log(errorMessage)
         return throwError(() => errorMessage);
    }

}