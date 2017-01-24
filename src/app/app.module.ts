import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { MainComponent } from './main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about',  component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


