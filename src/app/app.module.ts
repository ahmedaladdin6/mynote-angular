import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { ChangeNotesComponent } from './change-notes/change-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNotesComponent,
    ChangeNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
