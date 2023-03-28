import {NgModule} from '@angular/core';
import {HomePageRouting} from './home-page.routing';
import {HomeComponent} from './components/home/home.component';
import {MaterialModule} from '../../shared/modules/material.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HomePageRouting,
  ],
})
export class HomePageModule {}
