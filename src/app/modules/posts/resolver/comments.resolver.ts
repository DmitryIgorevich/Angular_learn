import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

import {
    EMPTY,
    Observable,
} from 'rxjs';
import {
    catchError,
    delay,
} from 'rxjs/operators';

import {IComment} from 'modules/posts/system/interfaces';
import {PostsService} from 'modules/posts/services/posts.service';

@Injectable()
export class CommentsResolver implements Resolve<IComment[]> {

    constructor(
        private postsService: PostsService,
        private router: Router,
    ) {
    }

    public resolve(
        routeSnapshot: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): IComment[] | Observable<IComment[]> | Promise<IComment[]> {
        return this.postsService.getPostsComments(routeSnapshot.parent?.params.id)
            .pipe(
                delay(1000),
                catchError(() => {
                    this.router.navigate(['/posts']);
                    return EMPTY;
                }),
            );
    }
}
