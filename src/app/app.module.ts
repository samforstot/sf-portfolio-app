import { NgModule, EventEmitter, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingCompnents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentsPageComponent } from './experiments-page/experiments-page.component';
import { HomeComponent } from './home/home.component';
import { ExpNavComponent } from './experiments-page/exp-nav/exp-nav.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CalculatorComponent } from './experiments-page/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMeComponent,
    IntroComponent,
    ProjectsComponent,
    ResumeComponent,
    ExperimentsComponent,
    ExperimentsPageComponent,
    routingCompnents,
    HomeComponent,
    ExpNavComponent,
    ContactsComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
