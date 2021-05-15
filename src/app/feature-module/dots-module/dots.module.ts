import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotsRoutingModule } from './dots-routing.module';
import { DotsComponent } from './dots.component';
import { ListDotsComponent } from './pages/list-dots/list-dots.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [DotsComponent, ListDotsComponent],
  imports: [
    CommonModule,
    DotsRoutingModule,
    SharedModule
  ],
  exports: [
    DotsComponent
  ]
})
export class DotsModule { }
