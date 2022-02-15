import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MockComponent} from 'modules/base/components/mock/mock.component';
import {PathsComponent} from 'modules/base/components/paths/paths.component';

import {LinkUrlsPipe} from 'modules/base/pipes/linkUrls.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        MockComponent,
        PathsComponent,

        LinkUrlsPipe,
    ],
    exports: [
        MockComponent,
        PathsComponent,
    ],
})
export class BaseModule { }
