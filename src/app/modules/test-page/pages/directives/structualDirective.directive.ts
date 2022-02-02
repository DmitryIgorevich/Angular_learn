import {
    Directive,
    Input,
    OnInit,
    Renderer2,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[appStructualDirective]',
})
export class StructualDirectiveDirective implements OnInit {

    constructor(
        protected templateRef: TemplateRef<any>,
        protected vcr: ViewContainerRef,
        protected renderer: Renderer2
    ) {}

    public ngOnInit(): void {
    }

    @Input()
    public set appStructualDirective(data: boolean) {
        if (data) {
            this.vcr.createEmbeddedView(this.templateRef);
        } else {
            this.vcr.clear();
        }
    }
}
