import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'egp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser: any;

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    
  }

  doLogout() {
    this.oauthService.logOut();
  }

  doLogin() {
    this.oauthService.initLoginFlow();
  }

  public get username() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims.preferred_username;
  }
}
