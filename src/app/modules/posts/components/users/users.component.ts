import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';

import {takeUntil} from 'rxjs/operators';

import {
    AbstractComponent,
    IAbstractComponentParams
} from 'modules/base';
import {RequestService} from 'modules/base/services';

@Component({
    selector: '[app-users]',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    public users: IUser[];

    constructor(
        protected requestService: RequestService,
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-users'
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.requestService.get<IUser[]>('users')
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe(data => {
                this.users = data;
                this.cdr.markForCheck();
            });
    }

}

export interface IUser {
    address: IAddress
    company: ICompany
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

export interface IAddress {
    city: string
    geo: {
        lat: string
        lng: string
    }
    street: string
    suite: string
    zipcode: string
}

export interface ICompany {
    bs: string
    catchPhrase: string
    name: string
}
