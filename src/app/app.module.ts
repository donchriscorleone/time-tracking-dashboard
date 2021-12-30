import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeCardComponent } from './components/time-card/time-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeCardComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
