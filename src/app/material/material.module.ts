import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    MatToolbarModule,
  ],
})
export class MaterialModule {
}
