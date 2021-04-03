import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ChangeLogComponent } from './Components/change-log/change-log.component';
import { ChangeLogService } from './Services/change-log/change-log.service';
import { ChangeLogSaveComponent } from './Components/change-log-save/change-log-save.component';
import { LoginClsComponent } from './Components/login-cls/login-cls.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ClsAuthService } from './Services/cls-auth/cls-auth.service';
import { AuthGuard } from './auth.guard';
import { ChangeLog } from './Components/change-log/change-log.model';

@NgModule({
  declarations: [
    AppComponent,
    ChangeLogComponent,
    ChangeLogSaveComponent,
    LoginClsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginClsComponent
      },
      {
         path: 'save-log',
         component: ChangeLogSaveComponent,
         data: ChangeLog,
         canActivate:[AuthGuard]
      },
      {
        path: 'change-logs',
        component: ChangeLogComponent, 
        canActivate:[AuthGuard]
     }
   ])
  ],
  providers: [ChangeLogService, ClsAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '446711521401-k9hnmrrvmopocrf2k875r25ucu3akvqo.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
