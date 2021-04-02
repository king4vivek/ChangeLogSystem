import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClsAuthService } from 'src/app/Services/cls-auth/cls-auth.service';

@Component({
  selector: 'app-login-cls',
  templateUrl: './login-cls.component.html',
  styleUrls: ['./login-cls.component.css']
})

export class LoginClsComponent {

  constructor(private router: Router, private socialAuthService: ClsAuthService) { }
 
  ngOnInit(){
    if (sessionStorage.getItem('idToken') !== null) {
      this.router.navigate(['/change-logs']);
    }
  }

  loginWithGoogle(): void {
    this.socialAuthService.SignIn();
  }
}
