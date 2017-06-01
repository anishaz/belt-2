import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { LoginService } from './login/login.service';
import { MainService } from './main/main.service';
import { PollService } from './new/poll.service';

import { routing } from './app.routes';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NewComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    MainService,
    PollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
