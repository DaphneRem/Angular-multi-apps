import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponentsModule } from './root-components/root-components.module';

import { AppLibComponent } from './app-lib.component';


@NgModule({
  declarations: [
    AppLibComponent
  ],
  imports: [
    BrowserModule,
    RootComponentsModule
  ],
  providers: [],
  bootstrap: [AppLibComponent]
})
export class AppLibModule { }
