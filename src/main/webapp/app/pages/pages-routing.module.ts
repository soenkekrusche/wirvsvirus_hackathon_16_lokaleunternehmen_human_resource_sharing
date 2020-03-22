import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyOfferPageComponent } from './company-offer-page/company-offer-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CompanyOfferPageComponent,
    data: {
      authorities: [],
      pageTitle: 'Angebote'
    }
  }
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
