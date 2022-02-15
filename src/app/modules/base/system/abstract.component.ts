import {
    Directive,
    HostBinding,
    OnDestroy,
    OnInit,
} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export class AbstractComponent<T extends IAbstractComponentParams> implements OnInit, OnDestroy {
    public destroy$: Subject<void> = new Subject();
    public class: string;

    @HostBinding('class')
    private classList: string;

    constructor(
        protected params: T,
    ) {}

    public ngOnInit(): void {
        this.setHostClass();
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public get mockGetter(): string {
        console.log('mockGetter');
        return 'test';
    }

    public mockMethod(): void {
        console.log('mockMethod');
    }

    protected addModificator(mod: string | string[]): void {
        this.changeHostClass(mod);
    }

    protected removeModificator(mod: string | string[]): void {
        this.changeHostClass(mod, true);
    }

    private changeHostClass(mod: string | string[], removeMod: boolean = false): void {
        if (typeof mod === 'string') {
            removeMod ? this.removeClass(mod) : this.addUniqClass(mod);
            return;
        }

        mod.forEach(item => removeMod ? this.removeClass(item): this.addUniqClass(item));
    }

    private removeClass(value: string): void {
        const mod: string = this.class + '--' + value;

        if (this.classList.includes(mod)) {
            this.classList = this.classList.replace(mod, '');
        }
    }

    private addUniqClass(value: string): void {
        const mod: string = this.class + '--' + value;

        if (this.classList.includes(mod)) {
            return;
        }

        this.classList += ' ' + mod;
    }

    private setHostClass(): void {
        this.classList = this.class = this.params.class;
    }
}

export interface IAbstractComponentParams {
    class: string
}
