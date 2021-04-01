import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClsAuthService } from './Services/cls-auth/cls-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cls-app';
  loggedIn = false;
  constructor(public socialAuthService: ClsAuthService) {
    
  }

  ngOnChanges() {
    this.loggedIn = this.socialAuthService.loggedIn;
  }

  logOut(): void {
    this.socialAuthService.SignOut();
  }
}
