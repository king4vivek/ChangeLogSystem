import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClsAuthService {
  
  user: SocialUser;
  loggedIn: boolean;

  constructor(private router: Router, private socialAuthService: SocialAuthService) {
    this.user = new SocialUser();
    this.loggedIn = false;
  }

  ngOnInit() {
    
  }

  SignIn(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.router.navigate(['/change-logs']);
    });
  }

  SignOut(): void {
    this.socialAuthService.signOut().then(resp => {
      this.router.navigate(['/login']);
    }).catch(reason => alert(reason));
  }
}
