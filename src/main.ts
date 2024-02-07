// import { Component } from '@angular/core';
import 'zone.js';
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routesConfig  from './app/routes';

bootstrapApplication(AppComponent,
    {providers: [provideRouter(routesConfig),provideProtractorTestingSupport()]})
  .catch(err => console.error(err));

