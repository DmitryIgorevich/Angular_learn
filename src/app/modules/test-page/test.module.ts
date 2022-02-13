import {SecondService} from './pages/di/second.service';
import {FormsModule} from '@angular/forms';
import {forwardRef, NgModule} from '@angular/core';
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
import {StructualDirectiveDirective} from './pages/directives/structualDirective.directive';
import {ComponentDirectiveStructualComponent} from './pages/directives/component-directive-structual/component-directive-structual.component';
import {TestComponentDiComponent} from './pages/di/test-component-di/test-component-di.component';
import {MainService} from 'app/modules/test-page/pages/di/main.service';
import {SecondTestComponentDiComponent} from './pages/di/second-test-component-di/second-test-component-di.component';

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
    {
        path: 'di',
        component: TestComponentDiComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(testModuleRoutes),
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
        ComponentDirectiveStructualComponent,
        StructualDirectiveDirective,
        TestComponentDiComponent,
        SecondTestComponentDiComponent,
    ],
    providers: [
        TestService,

        // тут я в функцию useFactory прокидываю зависимость, которая нам необходима при инжектировании через useFactory, чтобы прокинуть какой то сервис или сущность, нужно, чтобы она была доступна для инжектирования, в массив deps зависимости для функции указываются
        // {
        //     provide: MainService,
        //     useFactory: (data: SecondService) => {
        //         console.log(data);
        //         return new MainService();
        //     },
        //     deps: [SecondService],
        //     multi: false,
        // },
    ],
    exports: [],
})
export class TestModule {
}
