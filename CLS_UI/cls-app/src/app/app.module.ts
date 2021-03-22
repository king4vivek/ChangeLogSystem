import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ChangeLogService } from './change-log.service';
import { ChangeLogSaveComponent } from './change-log-save/change-log-save.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeLogComponent,
    ChangeLogSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'save-log',
         component: ChangeLogSaveComponent
      },
      {
        path: 'change-logs',
        component: ChangeLogComponent
     }
   ])
  ],
  providers: [ChangeLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
