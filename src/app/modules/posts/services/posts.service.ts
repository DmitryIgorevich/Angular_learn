import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {RequestService} from 'modules/base/services';
import {
    IPost,
    IUser,
} from 'modules/posts/system/interfaces';

@Injectable()
export class PostsService {

    constructor(
        private requestService: RequestService
    ) { }

    public getPosts(): Observable<IPost[]> {
        return this.requestService.get('posts');
    }

    public getPost(id: number): Observable<IPost> {
        return this.requestService.get('posts/' + id);
    }

    public getUsers(): Observable<IUser[]> {
        return this.requestService.get('users');
    }

    public getUser(id: number): Observable<IUser> {
        return this.requestService.get('users/' + id);
    }
}
