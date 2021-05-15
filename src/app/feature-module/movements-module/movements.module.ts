import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';

import { ListMovementsComponent } from './pages/list-movements/list-movements.component';
import { CreateMovementsComponent } from './pages/create-movements/create-movements.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [MovementsComponent,  ListMovementsComponent, CreateMovementsComponent],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    SharedModule
  ],
  exports: [
    MovementsComponent
  ]
})
export class MovementsModule { }
