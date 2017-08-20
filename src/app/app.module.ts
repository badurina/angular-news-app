import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SourcesListComponent } from './sources/sources-list.component';
import { SourcesService } from './sources/sources.service';

@NgModule({
  declarations: [
    AppComponent,
    SourcesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
