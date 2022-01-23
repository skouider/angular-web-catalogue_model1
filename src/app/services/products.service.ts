import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { product } from "../model/product.model";

@Injectable({providedIn:"root"})
export class ProductsService{

    
    constructor(private http: HttpClient){

    }

    getAllProducts():Observable<product[]>{
        let url = environment.host
      return  this.http.get<product[]>(url+"/products")
    }
    getSelectedProducts():Observable<product[]>{
        let url = environment.host
      return  this.http.get<product[]>(url+"/products?selected=true")
    }
    getAvailableProducts():Observable<product[]>{
        let url = environment.host
      return  this.http.get<product[]>(url+"/products?available=true")
    }
    searchProducts(keyword:string):Observable<product[]>{
      let url = environment.host
      return this.http.get<product[]>(url+"/products?name_like="+keyword)
    }

    selectProduct(product:product):Observable<product>{
      let url = environment.host
      product.selected = !product.selected
      return this.http.put<product>(url+"/products/"+product.id,product)
      
    }

    deleteProduct(product:product):Observable<void>{
      let url = environment.host
      return this.http.delete<void>(url+"/products/"+product.id)
    }

    saveProduct(product:product):Observable<product>{
      let url = environment.host
      return this.http.post<product>(url+"/products",product)
    }

    getProduct(id:number):Observable<product>{
      let url = environment.host
    return  this.http.get<product>(url+"/products/"+id)
  }
    updateProduct(product:product):Observable<product>{
      let url = environment.host
    return  this.http.put<product>(url+"/products/"+product.id,product)
    }


}