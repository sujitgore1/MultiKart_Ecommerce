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




const routes:Routes=[
  {path:'',component:HomeComponent}
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
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
