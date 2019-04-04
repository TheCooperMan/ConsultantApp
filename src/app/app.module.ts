import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ConsultantDetailComponent } from './consultant-detail/consultant-detail.component';
import { FilterPipe } from './myfilter';


@NgModule({
  declarations: [
    AppComponent,
    ConsultantComponent,
    ConsultantDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ConsultantDetailComponent]

})
export class AppModule { }
