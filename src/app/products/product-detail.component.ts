import { Component } from '@angular/core';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  pageTitle: string = 'Product Detail'
  public state: any;

  ngOnInit(): void {

   this.state = window.history.state;
   console.log(JSON.stringify(this.state));
   console.log(this.state);

  }

  ViewDetails(): void {
    console.log(this.state);
  }

}
