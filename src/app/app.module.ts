import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { MainComponent } from "./components/main/main.component";
import { InfoCardBerriesComponent } from "./components/info-card-berries/info-card-berries.component";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoCardBerriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
