import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PrimengModule} from './shared/modules/primeng.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/modules/material.module';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AppLayoutComponent} from './layouts/app-layout/app-layout.component';
import {NotingPageModule} from './pages/note/noting-page.module';
import {HomePageModule} from './pages/home/home-page.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    MaterialModule,
    HomePageModule,
    NotingPageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
