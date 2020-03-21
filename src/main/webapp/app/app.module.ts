import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SharinghumanresourcesSharedModule } from 'app/shared/shared.module';
import { SharinghumanresourcesCoreModule } from 'app/core/core.module';
import { SharinghumanresourcesAppRoutingModule } from './app-routing.module';
import { SharinghumanresourcesHomeModule } from './home/home.module';
import { SharinghumanresourcesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { CompanyOfferPageComponent } from './pages/company-offer-page/company-offer-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

const PAGES = [CompanyPageComponent, CompanyOfferPageComponent, UserProfilePageComponent];

@NgModule({
  imports: [
    BrowserModule,
    SharinghumanresourcesSharedModule,
    SharinghumanresourcesCoreModule,
    SharinghumanresourcesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SharinghumanresourcesEntityModule,
    SharinghumanresourcesAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent, PAGES],
  bootstrap: [MainComponent]
})
export class SharinghumanresourcesAppModule {}
