import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appDirective]',
})
export class DirectiveDirective implements OnInit {
    @Input()
    public stylesToModify: Partial<CSSStyleDeclaration>;
    protected initialStyles: Partial<CSSStyleDeclaration> = {};
    protected createdText: unknown;
    protected createdElement: HTMLElement;

    constructor(
        protected elementRef: ElementRef<HTMLElement>,
        protected renderer: Renderer2
    ) {}

    @HostListener('mouseenter')
    protected onEnter(): void {
        this.setStyles();

        this.createdElement = this.renderer.createElement('div');
        this.renderer.setStyle(this.createdElement, 'height', '150px');
        this.renderer.setStyle(this.createdElement, 'backgroundColor', 'white');

        const createdComment = this.renderer.createComment('Создал комментарий');
        this.renderer.appendChild(this.elementRef.nativeElement, createdComment);

        this.createdText = this.renderer.createText('Создал текст');
        this.renderer.insertBefore(this.elementRef.nativeElement, this.createdText, createdComment);

        // Создаю модалку и помещаю ее в body
        // const body: HTMLBodyElement = this.renderer.selectRootElement('body', true);
        // const modal: HTMLDivElement = this.renderer.createElement('div');
        // const modalText = this.renderer.createText('Модалка');
        // this.renderer.setStyle(modal, 'height', '500px');
        // this.renderer.setStyle(modal, 'color', 'red');
        // this.renderer.setStyle(modal, 'backgroundColor', 'black');
        // this.renderer.appendChild(modal, modalText);
        // this.renderer.appendChild(body, modal);
        // console.log(this.renderer.selectRootElement('router-outlet'));

        this.renderer.appendChild(this.elementRef.nativeElement, this.createdElement);
    }

    @HostListener('mouseleave')
    protected onLeave(): void {
        // this.nullStyles();

        this.renderer.removeChild(this.elementRef.nativeElement, this.createdText);
        this.renderer.removeChild(this.elementRef.nativeElement, this.createdElement);
    }

    public ngOnInit(): void {
        this.prepareStyles();
    }

    protected setStyles(): void {
        for (const key in this.stylesToModify) {

            if (Object.prototype.hasOwnProperty.call(this.stylesToModify, key)) {
                this.renderer.setStyle(this.elementRef.nativeElement, key, this.stylesToModify[key]);
            }
        }
    }

    protected nullStyles(): void {
        for (const key in this.stylesToModify) {

            if (Object.prototype.hasOwnProperty.call(this.stylesToModify, key)) {
                this.renderer.removeStyle(this.elementRef.nativeElement, key);
            }
        }
    }

    protected prepareStyles(): void {
        const styles = getComputedStyle(this.elementRef.nativeElement);

        for (const key in this.stylesToModify) {

            if (Object.hasOwnProperty.call(this.stylesToModify, key)) {
                this.initialStyles[key] = styles[key];
            }
        }
    }
}
