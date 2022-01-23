import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup!: FormGroup
  submitted!:boolean

  constructor(private formBuilder:FormBuilder,private service:ProductsService) { }

  ngOnInit(): void {

    this.productFormGroup = this.formBuilder.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    })
  }

  onSaveProduct(){
    this.submitted = true
    if(this.productFormGroup.invalid) return
    this.service.saveProduct(this.productFormGroup.value)
    .subscribe(data=>{
      alert("data successfully adding....")
    })



  }
}
