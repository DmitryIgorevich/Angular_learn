import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from 'app/app-routing-module/app-routing.module';
import {NavigationModule} from 'modules/navigation-page/navigation.module';

import {AppComponent} from 'app/app.component';
import {TestModule} from 'modules/test-page/test.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,

        AppRoutingModule,
        NavigationModule,
        TestModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
