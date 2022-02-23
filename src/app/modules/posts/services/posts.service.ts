import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {RequestService} from 'modules/base/services';
import {
    IComment,
    IPost,
    IUser,
} from 'modules/posts/system/interfaces';

@Injectable()
export class PostsService {

    constructor(
        private requestService: RequestService,
    ) { }

    public getPosts(): Observable<IPost[]> {
        return this.requestService.get('posts/');
    }

    public getPost(id: number): Observable<IPost> {
        return this.requestService.get('posts/' + id);
    }

    public getUsers(): Observable<IUser[]> {
        return this.requestService.get('users/');
    }

    public getUser(id: number): Observable<IUser> {
        return this.requestService.get('users/' + id);
    }

    public getUserPosts(id: number): Observable<IPost[]> {
        return this.requestService.get('users/' + id + '/posts');
    }

    public getComments(): Observable<IComment> {
        return this.requestService.get('comments/');
    }

    public getComment(id: number): Observable<IComment> {
        return this.requestService.get('comments/' + id);
    }

    public getPostsComments(id: number): Observable<IComment[]> {
        return this.requestService.get('posts/' + id + '/comments');
    }

    public updatePost(id: number, body: IPost): Observable<IPost> {
        return this.requestService.patch<IPost>('posts/' + id, body);
    }
}
