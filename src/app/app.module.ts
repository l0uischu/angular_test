import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, CommonModule, NgbModule],
  declarations: [
    AppComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
