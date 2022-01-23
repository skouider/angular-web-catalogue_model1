import { UrlMatcher } from "@angular/router";

export interface product{
    id:number;
    name:string;
    price:number;
    quantity:number;
    selected:boolean;
    available:boolean
}