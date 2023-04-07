import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsignatureComponent } from './asignature.component';
import { AsignatureToolbarComponent } from './asignature-toolbar/asignature-toolbar.component';
import { AsignaturePaginatorComponent } from './asignature-paginator/asignature-paginator.component';
import { AsignatureImportComponent } from './asignature-import/asignature-import.component';
import { AsignatureNewComponent } from './asignature-new/asignature-new.component';
import { MaterialExampleModule } from 'src/app/material.module';
const routes: Route[] = [
  { path: '', component: AsignatureComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MaterialExampleModule,
  ],
  exports: [],
  declarations: [
    AsignatureComponent,
    AsignatureToolbarComponent,
    AsignaturePaginatorComponent,
    AsignatureImportComponent,
    AsignatureNewComponent
    
  ],
  providers: [],
}) export class AsignatureModule { }
