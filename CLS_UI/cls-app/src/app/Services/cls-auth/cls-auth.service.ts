import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class ClsAuthService {
  
  socialUser: SocialUser;
  loggedIn: boolean;

  constructor(private router: Router, private socialAuthService: SocialAuthService) {
    this.socialUser = new SocialUser();
    this.loggedIn = false;
  }

  SignIn(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      if(user) {
        this.socialUser = user;      
        this.loggedIn = (user != null);
        sessionStorage.setItem('idToken', user.idToken);
        this.router.navigate(['/change-logs']);
      }
    });
  }

  SignOut(): void {
    this.socialAuthService.signOut().then(resp => {
      this.router.navigate(['/login']);
      sessionStorage.removeItem('idToken');
    }).catch(reason => alert(reason));
  }
}
