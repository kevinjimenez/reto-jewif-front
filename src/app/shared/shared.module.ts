import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {ImgComponent} from './components/img/img.component';


@NgModule({
  declarations: [
    ImgComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ImgComponent,
  ],
})
export class SharedModule {
}
