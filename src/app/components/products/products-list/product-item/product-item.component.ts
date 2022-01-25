import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/model/product.model';
import { ActionEvent, productActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:product | null = null
  @Output() productEventEmitt : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p:product){
     this.productEventEmitt.emit({type:productActionTypes.SELECT_PRODUCT,payload:p})
  }

  onDeleteProduct(p:product){
      this.productEventEmitt.emit({type:productActionTypes.DELETE_PRODUCT,payload:p})
  }
  onEditProduct(p:product){
    this.productEventEmitt.emit({type:productActionTypes.EDIT_PRODUCT,payload:p})
  }

}
