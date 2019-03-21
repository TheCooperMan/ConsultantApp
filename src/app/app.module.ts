import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ConsultantDetailComponent } from './consultant-detail/consultant-detail.component';
import { NavComponent } from './nav/nav.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultantComponent,
    ConsultantDetailComponent,
    NavComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
