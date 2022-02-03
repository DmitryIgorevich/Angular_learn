import {
    ApplicationRef,
    DoBootstrap,
    NgModule,
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from 'app/app-routing-module/app-routing.module';

import {AppComponent} from 'app/app-component/app.component';
import {TestModule} from 'modules/test-page/test.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        TestModule,
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule implements DoBootstrap {
    public ngDoBootstrap(applicationRef: ApplicationRef): void {
        applicationRef.bootstrap(AppComponent);
    }
}
