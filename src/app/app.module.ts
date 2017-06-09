import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DesignerComponent } from "./designer.component";
import { HomeComponent } from "./home.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [
      AppComponent,
      DesignerComponent,
      HomeComponent
  ]
})
export class AppModule { }
