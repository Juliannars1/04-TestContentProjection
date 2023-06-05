import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectcontentComponent } from './Component/projectcontent/projectcontent.component';
import { UseprojectcontentComponent } from './Component/useprojectcontent/useprojectcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectcontentComponent,
    UseprojectcontentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
