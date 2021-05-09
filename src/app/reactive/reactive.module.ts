import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwichesComponent } from './swiches/swiches.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicosComponent, DinamicosComponent, SwichesComponent],
  imports: [CommonModule, ReactiveFormsModule, ReactiveRoutingModule],
})
export class ReactiveModule {}
