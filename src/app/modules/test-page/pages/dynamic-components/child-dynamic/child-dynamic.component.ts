import {
    Component,
    Input,
    OnInit,
    ViewContainerRef,
} from '@angular/core';

import {TComponents} from 'modules/test-page/pages/dynamic-components/parent-dynamic/parent-dynamic.component';

@Component({
    selector: '[app-child-dynamic]',
    templateUrl: './child-dynamic.component.html',
    styleUrls: ['./child-dynamic.component.scss'],
})
export class ChildDynamicComponent implements OnInit {
    @Input()
    public components: TComponents;

    private timerId: ReturnType<typeof setTimeout>;
    private indexComponent: number = 0;

    constructor(
        protected vcr: ViewContainerRef
    ) {}

    ngOnInit() {
        this.setInterval();
    }

    protected loadComponent(): void {
        this.indexComponent = (this.indexComponent + 1) % this.components.length;
        const component = this.components[this.indexComponent];

        if (!component) {
            return;
        }

        this.vcr.clear();
        const createdComponent = this.vcr.createComponent(component.component);
        createdComponent.instance.data = component.data;
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
        }, 1500);
    }
}
