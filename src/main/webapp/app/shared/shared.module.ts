import { NgModule } from '@angular/core';
import { SharinghumanresourcesSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  imports: [SharinghumanresourcesSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective, AvatarComponent],
  entryComponents: [LoginModalComponent],
  exports: [SharinghumanresourcesSharedLibsModule, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective, AvatarComponent]
})
export class SharinghumanresourcesSharedModule {}
