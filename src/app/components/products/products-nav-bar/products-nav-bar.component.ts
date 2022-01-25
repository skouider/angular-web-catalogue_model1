import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, productActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output()  productEventEmitter:EventEmitter<ActionEvent> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
   this.productEventEmitter.emit({type:productActionTypes.GET_ALL_PRODUCTS,payload:null})
  }
  onGetSelectedProducts(){
    this.productEventEmitter.emit({type:productActionTypes.GET_SELECTED_PRODUCTS})
  }

  onGetAvailableProducts(){
    this.productEventEmitter.emit({type:productActionTypes.GET_AVAILABLE_PRODUCTS})
  }
  onAddProducts(){
    this.productEventEmitter.emit({type:productActionTypes.ADD_PRODUCTS})

  }
  onSearch(dataForm: any){
      this.productEventEmitter.emit({type: productActionTypes.SEARCH_PRODUCTS,payload:dataForm})
  }
}
