import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ChangeLogService } from './change-log.service';

@NgModule({
  declarations: [
    AppComponent,
    ChangeLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChangeLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
