import {Component} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'app/modules/base';
import {
    AsyncSubject,
    BehaviorSubject,
    bindCallback,
    combineLatest,
    concat,
    defer,
    EMPTY,
    empty,
    forkJoin,
    from,
    fromEvent,
    fromEventPattern,
    iif,
    interval,
    merge,
    Observable,
    of,
    partition,
    race,
    range,
    ReplaySubject,
    Subject,
    timer,
    zip,
} from 'rxjs';
import {catchError, map, repeat, switchMap, tap} from 'rxjs/operators';

@Component({
    selector: '[app-root]',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends AbstractComponent<IAbstractComponentParams> {
    constructor() {
        super({
            class: 'app-root',
        });
    }
}

const boolean = true;


const observable1 = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    // subscriber.complete();
});

const observable2 = new Observable(subscriber => {
    subscriber.next('first');
    subscriber.next('second');
    subscriber.next('third');
    // subscriber.complete();
});


const subject1 = new Subject();
const subject2 = new Subject();


fromEvent(document, 'click')
    .pipe(
        tap(() => {
            console.log(1);
        }),
        switchMap(() => {
            return interval(1000);
        }),
    )
    .subscribe(data => {
        console.log(data);
    });
