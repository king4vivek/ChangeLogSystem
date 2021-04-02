import { Component } from '@angular/core';
import { ClsAuthService } from './Services/cls-auth/cls-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean = false;

  constructor(public socialAuthService: ClsAuthService) {
    sessionStorage.removeItem('idToken');
   }

  ngOnInit(){
    this.loggedIn = sessionStorage.getItem('idToken') !== null;
  }

  logOut(): void {
    this.socialAuthService.SignOut();
  }
}
