import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) {
    
   }
  //  Carousel
  getCarouselData(){
   return this.http.get('http://localhost:3000/carousel')
  }
  // Top Collection
   getTopCollection(){
   return this.http.get('http://localhost:3000/topCollection')
   }
  //  All Types
   getNewProducts(name:any){
    return this.http.get('http://localhost:3000/'+name)
   }
  //  New Products
   getData(){
    return this.http.get('http://localhost:3000/newProducts')
   }

   
}
