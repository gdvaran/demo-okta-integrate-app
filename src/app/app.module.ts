import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { BrowserModule } from '@angular/platform-browser';

import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './container/callback/callback.component';

const oktaAuth = new OktaAuth({
  issuer: 'https://trial-5168903.okta.com/oauth2/default',
  clientId: '0oa6l1xtcaGFiuhYY697',
  redirectUri: 'https://stackblitz-starters-kktazf.stackblitz.io/login/callback',
});

const oktaConfig = {
  oktaAuth: oktaAuth,
};

const routes: Routes = [{ path: 'login/callback', component: CallbackComponent }];

@NgModule({
  imports: [BrowserModule, OktaAuthModule.forRoot(oktaConfig), RouterModule.forRoot(routes)],
  bootstrap: [ContainerComponent],
  declarations: [ContainerComponent],
})
export class AppModule {}
