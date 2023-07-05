import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  value: number = 5;
  products:any

  constructor(private data:ProductsService){

  }
  ngOnInit(){
    this.data.getTopCollection().subscribe((res:any)=>{
      this.products=res
    })
  }
}
