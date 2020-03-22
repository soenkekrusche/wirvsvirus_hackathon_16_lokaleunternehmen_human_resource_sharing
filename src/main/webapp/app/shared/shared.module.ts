import { NgModule } from '@angular/core';
import { SharinghumanresourcesSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { CompetenceListEntryComponent } from './components/competence-list-entry/competence-list-entry.component';
import { OfferListEntryComponent } from './components/offer-list-entry/offer-list-entry.component';

const CONTROL_COMPONENTS = [
  AvatarComponent,
  ButtonComponent,
  SearchBarComponent,
  NavigationBarComponent,
  OfferListEntryComponent,
  UploadPhotoComponent,
  CompetenceListEntryComponent
];

@NgModule({
  imports: [SharinghumanresourcesSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective, CONTROL_COMPONENTS],
  entryComponents: [LoginModalComponent],
  exports: [
    SharinghumanresourcesSharedLibsModule,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    CONTROL_COMPONENTS
  ]
})
export class SharinghumanresourcesSharedModule {}
