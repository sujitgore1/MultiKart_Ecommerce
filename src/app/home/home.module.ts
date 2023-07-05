import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorouselComponent } from './corousel/corousel.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { LogosComponent } from './logos/logos.component';
import { SpecialComponent } from './special/special.component';
import { TrendsComponent } from './trends/trends.component';
import { CarouselModule } from 'primeng/carousel';
import { Passion1Component } from './vegetables/passion1/passion1.component';




const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'vegetables',component:Passion1Component}
]


@NgModule({
  declarations: [
    CorouselComponent,
    HomeComponent,
    OffersComponent,
    ServicesComponent,
    LogosComponent,
    SpecialComponent,
    TrendsComponent,
    Passion1Component
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
