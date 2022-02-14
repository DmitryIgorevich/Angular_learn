import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MockComponent} from 'modules/base/components/mock/mock.component';
import {PathsComponent} from 'modules/base/components/paths/paths.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MockComponent,
        PathsComponent,
    ],
    exports: [
        MockComponent,
        PathsComponent,
    ],
})
export class BaseModule { }
