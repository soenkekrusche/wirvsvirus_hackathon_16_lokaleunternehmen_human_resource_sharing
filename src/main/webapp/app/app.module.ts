import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SharinghumanresourcesSharedModule } from 'app/shared/shared.module';
import { SharinghumanresourcesCoreModule } from 'app/core/core.module';
import { SharinghumanresourcesAppRoutingModule } from './app-routing.module';
// import { SharinghumanresourcesHomeModule } from './home/home.module';
import { SharinghumanresourcesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { UserService } from './core/user/user.service';
import { UserServiceMock } from './services/user.service.mock';
import { CompanyService } from './services/company.service';
import { CompanyServiceMock } from './services/company.service.mock';
import { PagesModule } from './pages/pages.module';
// import { SharinghumanresourcesHomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    SharinghumanresourcesSharedModule,
    SharinghumanresourcesCoreModule,
    // SharinghumanresourcesHomeModule,
    PagesModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SharinghumanresourcesEntityModule,
    SharinghumanresourcesAppRoutingModule
  ],
  providers: [
    { provide: UserService, useClass: UserServiceMock },
    { provide: CompanyService, useClass: CompanyServiceMock }
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SharinghumanresourcesAppModule {}
