import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { PreparationComponent } from './preparation/preparation.component';
import { PricingComponent } from './pricing/pricing.component';
import { VarietiesComponent } from './varieties/varieties.component';

const routes: Routes = [
  {
    path:'',component:BodyComponent
  },
  {
    path:'home',component:BodyComponent
  },
  {
    path: 'preparation',component:PreparationComponent
  },
  {
    path:'varieties',component:VarietiesComponent
  },
  {
    path:'pricing',component:PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
