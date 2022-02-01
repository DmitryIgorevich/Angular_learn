import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import {TestComponent} from 'modules/test-page/pages/test/test.component';
import {DetectionParentComponent} from 'modules/test-page/pages/detection/parent/parent.component';
import {ChildDetectionComponent} from 'modules/test-page/pages/detection/child/child.component';
import {TestService} from 'modules/test-page/services/test.service';
import {TestNavigationComponent} from 'modules/test-page/pages/test-navigation/test-navigation.component';
import {SlotComponent} from 'modules/test-page/pages/slots/slot/slot.component';
import {SlotChildComponent} from 'modules/test-page/pages/slots/slot-child/slot-child.component';
import {ParentEncapsulationComponent} from 'modules/test-page/pages/encapsulation/parent-encapsulation/parent-encapsulation.component';
import {ChildEncapsulationComponent} from 'modules/test-page/pages/encapsulation/child-encapsulation/child-encapsulation.component';
import {ChildChildComponent} from 'modules/test-page/pages/encapsulation/child-child/child-child.component';
import {DataPassParentComponent} from 'modules/test-page/pages/data-passing/data-pass-parent/data-pass-parent.component';
import {DataPassChildComponent} from 'modules/test-page/pages/data-passing/data-pass-child/data-pass-child.component';
import {ChildDynamicComponent} from 'modules/test-page/pages/dynamic-components/child-dynamic/child-dynamic.component';
import {ParentDynamicComponent} from 'modules/test-page/pages/dynamic-components/parent-dynamic/parent-dynamic.component';
import {TestTemplatesComponent} from 'modules/test-page/pages/interpolation/test-interpolation/test-interpolation.component';
import {BindingChildComponent} from './pages/interpolation/binding-child/binding-child.component';
import {TestComponentDirectiveComponent} from './pages/directives/test-component-directive/test-component-directive.component';
import {DirectiveDirective} from './pages/directives/directive.directive';

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
    {
        path: 'encapsulation',
        component: ParentEncapsulationComponent,
    },
    {
        path: 'data-passing',
        component: DataPassParentComponent,
    },
    {
        path: 'dynamic-components',
        component: ParentDynamicComponent,
    },
    {
        path: 'templates',
        component: TestTemplatesComponent,
    },
    {
        path: 'directives',
        component: TestComponentDirectiveComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(testModuleRoutes),
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ChildEncapsulationComponent,
        ParentEncapsulationComponent,
        ChildChildComponent,

        DataPassParentComponent,
        DataPassChildComponent,

        ParentDynamicComponent,
        ChildDynamicComponent,

        TestTemplatesComponent,
        BindingChildComponent,

        TestComponentDirectiveComponent,

        TestComponent,
        TestNavigationComponent,
        DetectionParentComponent,
        ChildDetectionComponent,
        SlotComponent,
        SlotChildComponent,

        DirectiveDirective,
    ],
    providers: [
        TestService,
    ],
    exports: [],
})
export class TestModule {
}
