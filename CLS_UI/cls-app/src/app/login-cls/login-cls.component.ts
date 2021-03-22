import { Component, OnInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-login-cls',
  templateUrl: './login-cls.component.html',
  styleUrls: ['./login-cls.component.css']
})

export class LoginClsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.googleInit()
  }
  auth2: any;
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: 'king4vivek.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  attachSignin(element:any) {
    this.auth2.attachClickHandler(element, {},
      (googleUser:any) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error:any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}
