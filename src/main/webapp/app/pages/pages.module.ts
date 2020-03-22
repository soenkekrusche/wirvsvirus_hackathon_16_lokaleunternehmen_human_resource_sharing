import { NgModule } from '@angular/core';

import { SharinghumanresourcesSharedModule } from 'app/shared/shared.module';
import { CompanyOfferPageComponent } from './company-offer-page/company-offer-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UserWelcomePageComponent } from './user-welcome-page/user-welcome-page.component';
import { UserHelpHowPageComponent } from './user-help-how-page/user-help-how-page.component';
import { UserHelpWhenPageComponent } from './user-help-when-page/user-help-when-page.component';
import { UserProfileCreatedPageComponent } from './user-profile-created-page/user-profile-created-page.component';
import { OffersSearchPageComponent } from './offers-search-page/offers-search-page.component';
import { UserProfileCompetencesPageComponent } from './user-profile-competences-page/user-profile-competences-page.component';
import { MatchPageComponent } from './match-page/match-page.component';

const PAGES = [
  CompanyPageComponent,
  CompanyOfferPageComponent,
  UserProfilePageComponent,
  UserWelcomePageComponent,
  UserHelpHowPageComponent,
  UserHelpWhenPageComponent,
  UserProfileCreatedPageComponent,
  OffersSearchPageComponent,
  UserProfileCompetencesPageComponent,
  MatchPageComponent
];

@NgModule({
  imports: [SharinghumanresourcesSharedModule, PagesRoutingModule],
  declarations: [PAGES]
})
export class PagesModule {}
