import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";


import { AppComponent } from './app.component';
import { DesignerComponent } from "./designer.component";
import { HomeComponent } from "./home.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    HomeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,

      NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
