import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
} from '@angular/router';

import {
    filter,
    takeUntil,
} from 'rxjs/operators';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base/system/abstract.component';

@Component({
    selector: '[app-paths]',
    templateUrl: './paths.component.html',
    styleUrls: ['./paths.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathsComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    public urls: string[];

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-paths',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.parseUrl(this.router.url);
        this.router.events
            .pipe(
                takeUntil(this.destroy$),
                filter(event => event instanceof NavigationEnd),
            )
            .subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.parseUrl(event.urlAfterRedirects);
                    this.cdr.markForCheck();
                }
            });
    }

    protected parseUrl(url: string): void {
        const urls = url.split('/');
        this.urls = urls;
    }
}
