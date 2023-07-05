import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserService {
  public url1:any='http://localhost:3000/TRENDING_PRODUCTS'
  public url2:any='http://localhost:3000/Blog_Detail'

  constructor(private api:HttpClient) { }

  getdata(){
  return this.api.get(this.url1)
    
  }

  getdata2(){
    return this.api.get(this.url2)
      
    }
}
   