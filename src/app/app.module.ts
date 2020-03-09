import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfigModule } from 'src/config/auth/auth.config.module';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthConfigModule
  ],
  providers: [
  ],
  bootstrap: [
    // AppComponent
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(AppComponent, { injector });

    // define in browser registry
    customElements.define('egp-launcher', ngCustomElement);

  }
}
