import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent {
  value:number=5
  products:any
  constructor(private data:ProductsService){

  }

  ngOnInit(){
    this.data.getData().subscribe((res:any)=>{
      this.products=res
    })
  }

  showNewProducts(type:any){
    this.data.getNewProducts(type).subscribe((res:any)=>{
      this.products=res
    })
  }

}
