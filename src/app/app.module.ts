import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { SetupPageComponent } from './setup-page/setup-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
