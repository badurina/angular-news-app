import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SourcesListComponent } from './components/sources/sources-list.component';
import { SourcesService } from './services/sources.service';

@NgModule({
  declarations: [
    AppComponent,
    SourcesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
