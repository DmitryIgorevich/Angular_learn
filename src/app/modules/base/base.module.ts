import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MockComponent} from 'modules/base/components/mock/mock.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MockComponent,
    ],
    exports: [
        MockComponent,
    ],
})
export class BaseModule { }
