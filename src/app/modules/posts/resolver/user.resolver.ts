import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    Router,
    RouterStateSnapshot
} from '@angular/router';

import {
    EMPTY,
    Observable
} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {IUser} from 'modules/posts/system/interfaces';
import {PostsService} from 'modules/posts/services/posts.service';

@Injectable()
export class UserResolver implements Resolve<IUser> {

    constructor(
        private postsService: PostsService,
        private router: Router,
    ) {}

    public resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
        return this.postsService.getUser(routeSnapshot.params.id)
            .pipe(
                catchError(() => {
                    this.router.navigate(['/users']);
                    return EMPTY;
                })
            );
    }
}
