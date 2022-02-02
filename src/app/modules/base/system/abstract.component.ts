import {
    Directive,
    HostBinding,
    OnDestroy,
    OnInit
} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export class AbstractComponent<T extends IAbstractComponentParams> implements OnInit, OnDestroy {
    public destroy$: Subject<void> = new Subject();

    constructor(
        protected params: T,
    ) {}

    @HostBinding('class')
    protected class: string;

    public ngOnInit(): void {
        this.setHostClass();
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private setHostClass(): void {
        this.class = this.params.class;
    }
}

export interface IAbstractComponentParams {
    class: string
}
