import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecentProjectsComponent} from "./core/recent-projects/recent-projects.component";
import { IntroductionComponent } from './core/introduction/introduction.component';

@NgModule({
    declarations: [
        AppComponent,
        RecentProjectsComponent,
        RecentProjectsComponent,
        IntroductionComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
