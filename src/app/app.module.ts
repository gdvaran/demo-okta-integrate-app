import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { BrowserModule } from '@angular/platform-browser';

import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://trial-5168903.okta.com/oauth2/default',
  clientId: '0oa6l1xtcaGFiuhYY697',
  redirectUri: 'https://stackblitz-starters-kktazf.stackblitz.io/login/callback',
});

const oktaConfig = {
  oktaAuth: oktaAuth,
};

@NgModule({
  imports: [BrowserModule, OktaAuthModule.forRoot(oktaConfig)],
  bootstrap: [ContainerComponent],
  declarations: [ContainerComponent],
})
export class AppModule {}
