import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorouselComponent } from './corousel/corousel.component';
import { HomeComponent } from './home/home.component';




const routes:Routes=[
  {path:'',component:HomeComponent}
]


@NgModule({
  declarations: [
    CorouselComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
