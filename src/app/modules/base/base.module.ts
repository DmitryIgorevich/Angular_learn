import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {MockComponent} from 'modules/base/components/mock/mock.component';
import {PathsComponent} from 'modules/base/components/paths/paths.component';
import {InputComponent} from 'modules/base/components/input/input.component';

import {LinkUrlsPipe} from 'modules/base/pipes/linkUrls.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    declarations: [
        MockComponent,
        PathsComponent,
        InputComponent,

        LinkUrlsPipe,
    ],
    providers: [
    ],
    exports: [
        ReactiveFormsModule,

        MockComponent,
        PathsComponent,
        InputComponent,
    ],
})
export class BaseModule { }
