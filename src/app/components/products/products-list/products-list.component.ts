import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/model/product.model';
import { ActionEvent, appDataState, DataStateEnum, productActionTypes } from 'src/app/state/product.state';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

   @Input() productsInput$: Observable<appDataState<product[]>> | null = null;
   @Output() productsEventEmit: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>(); 
   readonly dataStateEnum = DataStateEnum
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p:product){
     this.productsEventEmit.emit({type:productActionTypes.SELECT_PRODUCT,payload:p})
  }

  onDeleteProduct(p:product){
     this.productsEventEmit.emit({type:productActionTypes.DELETE_PRODUCT,payload:p})
  }

  onEditProduct(p:product){
    this.productsEventEmit.emit({type:productActionTypes.EDIT_PRODUCT,payload:p})
  }
  
  onActionEvent(event:ActionEvent){
      this.productsEventEmit.emit(event)
  }

}
