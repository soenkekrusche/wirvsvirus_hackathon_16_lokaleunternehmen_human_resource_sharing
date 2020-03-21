import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharinghumanresourcesSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [SharinghumanresourcesSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}
