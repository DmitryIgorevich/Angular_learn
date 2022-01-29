import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NavigationComponent} from 'modules/navigation-page/components/navigation/navigation.component';

@NgModule({
    imports: [
        RouterModule.forRoot([]),
    ],
    declarations: [
        NavigationComponent,
    ],
    exports: [
        RouterModule,
    ],
})
export class NavigationModule {}
