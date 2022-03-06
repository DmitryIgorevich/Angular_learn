import {
    ApplicationRef,
    DoBootstrap,
    NgModule,
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';

import {AppRoutingModule} from 'app/app-routing-module/app-routing.module';
import {MarketModule} from 'modules/market-page/market.module';

import {AppComponent} from 'app/app-component/app.component';

import {InterceptorService} from 'modules/base/system/interceptors/interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,

        AppRoutingModule,
        MarketModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true,
        },
    ],
    bootstrap: [],
})
export class AppModule implements DoBootstrap {

    public ngDoBootstrap(applicationRef: ApplicationRef): void {
        applicationRef.bootstrap(AppComponent, '#root');
    }
}
