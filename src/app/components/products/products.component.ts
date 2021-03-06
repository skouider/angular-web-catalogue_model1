import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { catchError, map, startWith } from 'rxjs/operators';
import { appDataState, DataStateEnum } from 'src/app/state/product.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<appDataState<product[]>> | null = null;
  dataStateEnum = DataStateEnum

  constructor(private productsService: ProductsService,private router:Router) { }


  ngOnInit(): void {

  }
  onGetAllProducts() {
    this.products$ = this.productsService.getAllProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }
  onGetSelectedProducts() {
    this.products$ = this.productsService.getSelectedProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }
  onGetAvailableProducts() {
    this.products$ = this.productsService.getAvailableProducts()
      .pipe(
        map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
      )
  }

  onSearch(dataForm: any) {
    this.products$ = this.productsService.searchProducts(dataForm.keyword)
      .pipe(
        map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
      )
  }

  onSelect(p: product) {
    this.productsService.selectProduct(p)
      .subscribe(data => {
        p.selected = data.selected
      })
  }

  onDeleteProduct(p: product) {
    let v = confirm('etes vous sure de supprim?????')
    if(v == true)
    this.productsService.deleteProduct(p)
      .subscribe(data => {
        this.onGetAllProducts()
      }, err => {
        console.log(err);

      })
  }
   
  onAddProducts(){
   this.router.navigateByUrl("/add-product")
  }
  onEditProduct(p:product){
    this.router.navigateByUrl("/edit-product/"+p.id)
  }
}
