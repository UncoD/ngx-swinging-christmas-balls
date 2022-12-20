import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxSwingingChristmasBallsModule } from 'ngx-swinging-christmas-balls';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSwingingChristmasBallsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
