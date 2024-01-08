import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { route } from '../route';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FirstComponent } from '../core/b/first/first.component';
import { SecondComponent } from '../core/b/second/second.component';
import { FourthComponent } from '../core/b/fourth/fourth.component';
import { RouterModule } from '@angular/router';
import { UsernameLengthDirective } from '../shared/d/username-length.directive';
import { DataTablesModule } from 'angular-datatables';
import { FormService } from '../form.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FourthComponent,
    UsernameLengthDirective
  ],
  imports: [
    BrowserModule,
    route,
    FormsModule,
    CoreModule,
    SharedModule,
    RouterModule,
    DataTablesModule,
    HttpClientModule
   ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
