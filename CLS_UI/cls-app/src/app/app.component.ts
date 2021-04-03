import { Component, HostListener } from '@angular/core';
import { ClsAuthService } from './Services/cls-auth/cls-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public socialAuthService: ClsAuthService) { }

  logOut(): void {
    this.socialAuthService.SignOut();
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(e:any) {
    sessionStorage.removeItem('idToken');
  }
}
