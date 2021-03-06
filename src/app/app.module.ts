import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibraryModule } from 'library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
