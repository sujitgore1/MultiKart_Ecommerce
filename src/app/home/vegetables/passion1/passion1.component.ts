import { Component } from '@angular/core';
import { DataserService } from './services/dataser.service';

@Component({
  selector: 'app-passion1',
  templateUrl: './passion1.component.html',
  styleUrls: ['./passion1.component.css']
})
  

export class Passion1Component {

  public carddata:any=[];

  public carddata2:any=[];
  public responsiveOptions:any=[];

  
  

  constructor(private dd:DataserService){
   
    this. get()
    this. get2()
  }

// carddata-1 get
  get(){
    this.dd.getdata().subscribe((res:any)=>{this.carddata=res;
      console.log(this.carddata);
      
    }
    )
  }

  // carddata2 get

  get2(){
    this.dd.getdata2().subscribe((res:any)=>{this.carddata2=res;
      console.log(this.carddata2);
      
    }
    )

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


// for owl-carousel code






   
}













