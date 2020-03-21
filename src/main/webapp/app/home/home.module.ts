import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharinghumanresourcesSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import {SharinghumanresourcesAppModule} from "app/app.module";

@NgModule({
  imports: [SharinghumanresourcesSharedModule, RouterModule.forChild([HOME_ROUTE]), SharinghumanresourcesAppModule],
  declarations: [HomeComponent]
})
export class SharinghumanresourcesHomeModule {}
