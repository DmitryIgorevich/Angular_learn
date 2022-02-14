import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
    ) {
        super({
            class: 'app-paths',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();
        console.log(this.router);
        console.log(this.route);

        console.log(this.route.pathFromRoot);

        this.route.url.subscribe(data => {
            console.log(data);
        });

    }

}
