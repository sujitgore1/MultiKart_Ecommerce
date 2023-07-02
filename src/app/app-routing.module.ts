import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // HomeModule
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  
  {
    path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)
  },

  // ShopModule
  {
    path:'shop',loadChildren:()=>import('./shop/shop.module').then(mod=>mod.ShopModule)
  },

  // ProductsModule
  {
    path:'products',loadChildren:()=>import('./products/products.module').then(mod=>mod.ProductsModule)
  },

  // FeatureModule
  {
    path:'features',loadChildren:()=>import('./feature/feature.module').then(mod=>mod.FeatureModule)
  },

  // PagesModule
  {
    path:'pages',loadChildren:()=>import('./pages/pages.module').then(mod=>mod.PagesModule)
  },

  // BlogsModule
  {
    path:'blogs',loadChildren:()=>import('./blogs/blogs.module').then(mod=>mod.BlogsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
