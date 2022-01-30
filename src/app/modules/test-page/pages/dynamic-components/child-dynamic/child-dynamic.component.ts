import {
    Component,
    ComponentFactoryResolver,
    Input,
    OnInit,
    ViewContainerRef,
} from '@angular/core';

import {WorkDynamicComponent} from '../work-dynamic/work-dynamic.component';

@Component({
    selector: '[app-child-dynamic]',
    templateUrl: './child-dynamic.component.html',
    styleUrls: ['./child-dynamic.component.scss'],
})
export class ChildDynamicComponent implements OnInit {
    @Input()
    public components: any[];

    private timerId: ReturnType<typeof setTimeout>;

    constructor(
        protected vcr: ViewContainerRef,
        protected cfr: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        this.setInterval();
    }

    protected loadComponent(): void {
        const component = this.components[0];

        const componentFactory = this.cfr.resolveComponentFactory(component.component);
        const createdComponent = this.vcr.createComponent(componentFactory);
        (createdComponent as any).instance.data = component.data;
    }

    protected setInterval(): void {
        if (this.timerId) {
            clearTimeout(this.timerId);
        } else {
            this.loadComponent();
        }

        this.timerId = setTimeout(() => {
            this.loadComponent();
            this.setInterval();
        }, 2000);
    }
}
