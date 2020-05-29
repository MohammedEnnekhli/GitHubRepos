import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { JwPaginationComponent } from './components/jw-pagination/jw-pagination.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [AppComponent, ShortNumberPipe, JwPaginationComponent, DateAgoPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
