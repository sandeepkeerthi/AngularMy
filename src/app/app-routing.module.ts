import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductTemplateDetailsComponent } from './product-template-details/product-template-details.component';


const routes: Routes =  [
  { path: 'templateDetail', component: ProductTemplateDetailsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
