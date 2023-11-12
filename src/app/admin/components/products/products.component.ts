import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products"
    // }, {
    //   id: "6f665a38-1920-4467-8652-048ca977f112",
    //   name: "Renkli Kağit",
    //   stock: 1500,
    //   price: 5.5
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "ed6d8b5b-3681-4950-bc2e-26fd581369bb")
    // .subscribe();

    // this.httpClientService.get({
    //   fullEndPoint: "https://jsonplaceholder.typicode.com/posts",
    // }).subscribe(data => console.log(data));
  }
}
