import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})
export class CorouselComponent {
  data:any
  constructor(private api:ProductsService){

  }

  ngOnInit(){
    this.getCarouselData()
  }

  getCarouselData(){
    this.api.getCarouselData().subscribe((res:any)=>{
      this.data=res
    })
  }
}
