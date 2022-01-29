import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import {TestComponent} from 'modules/test-page/components/test/test.component';
import {DetectionParentComponent} from 'modules/test-page/components/parent/parent.component';
import {ChildDetectionComponent} from 'modules/test-page/components/child/child.component';
import {TestService} from 'modules/test-page/services/test.service';
import {TestNavigationComponent} from 'modules/test-page/components/test-navigation/test-navigation.component';
import {SlotComponent} from 'modules/test-page/components/slot/slot.component';
import {SlotChildComponent} from 'modules/test-page/components/slot-child/slot-child.component';

export const testModuleRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: TestNavigationComponent,
    },
    {
        path: 'detection',
        component: DetectionParentComponent,
    },
    {
        path: 'slot',
        component: SlotComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(testModuleRoutes),
        CommonModule,
    ],
    declarations: [
        TestComponent,
        TestNavigationComponent,
        DetectionParentComponent,
        ChildDetectionComponent,
        SlotComponent,
        SlotChildComponent,
    ],
    providers: [
        TestService,
    ],
    exports: [
        RouterModule,
    ],
})
export class TestModule {
}
