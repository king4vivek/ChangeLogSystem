import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClsAuthService } from 'src/app/Services/cls-auth/cls-auth.service';

@Component({
  selector: 'app-login-cls',
  templateUrl: './login-cls.component.html',
  styleUrls: ['./login-cls.component.css']
})

export class LoginClsComponent implements OnInit {

  constructor(private router: Router, private socialAuthService: ClsAuthService) { }

  ngOnInit() {
    if (this.socialAuthService.loggedIn == true) {
      this.router.navigate(['/change-logs']);
    }
  }

  loginWithGoogle(): void {
    this.socialAuthService.SignIn();
  }
}
