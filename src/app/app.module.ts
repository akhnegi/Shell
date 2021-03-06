import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HumanResourceComponent } from './app.component';

import { HeaderViewModule } from 'micro-header-nav/app/app.module';
import { SideNavViewModule } from 'micro-side-nav/app/app.module';
import { HRModule } from 'micro-hr/app/app.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HumanResourceComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HeaderViewModule,
    SideNavViewModule,
    HRModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [HumanResourceComponent]
})
export class AppModule { }
