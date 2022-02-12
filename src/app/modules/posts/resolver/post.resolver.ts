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

import {IPost} from 'modules/posts/system/interfaces';
import {PostsService} from 'modules/posts/services/posts.service';

@Injectable()
export class PostResolver implements Resolve<IPost> {

    constructor(
        private postsService: PostsService,
        private router: Router,
    ) {}

    public resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPost | Observable<IPost> | Promise<IPost> {
        return this.postsService.getPost(routeSnapshot.params.id)
            .pipe(
                catchError(() => {
                    this.router.navigate(['/posts']);
                    return EMPTY;
                })
            );
    }
}
