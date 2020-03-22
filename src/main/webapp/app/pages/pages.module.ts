import { NgModule } from '@angular/core';

import { SharinghumanresourcesSharedModule } from 'app/shared/shared.module';
import { CompanyOfferPageComponent } from './company-offer-page/company-offer-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { PagesRoutingModule } from './pages-routing.module';

const PAGES = [CompanyPageComponent, CompanyOfferPageComponent, UserProfilePageComponent];

@NgModule({
  imports: [SharinghumanresourcesSharedModule, PagesRoutingModule],
  declarations: [PAGES]
})
export class PagesModule {}
