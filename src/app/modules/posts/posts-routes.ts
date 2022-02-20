import {Route} from '@angular/router';

import {PostsComponent} from 'modules/posts/components/posts/posts.component';
import {UsersComponent} from 'modules/posts/components/users/users.component';
import {PostComponent} from 'modules/posts/components/post/post.component';
import {UserComponent} from 'modules/posts/components/user/user.component';
import {CommentsComponent} from 'modules/posts/components/comments/comments.component';
import {MainPostsComponent} from 'modules/posts/components/main-posts/main-posts.component';
import {CommentComponent} from 'modules/posts/components/comment/comment.component';

import {PostResolver} from 'modules/posts/resolver/post.resolver';
import {UserResolver} from 'modules/posts/resolver/user.resolver';
import {CommentsResolver} from 'modules/posts/resolver/comments.resolver';
import {CommentResolver} from 'modules/posts/resolver/comment.resolver';

export const postsRoutes: Route[] = [
    {
        path: '',
        component: MainPostsComponent,
        children: [
            {
                path: '',
                component: PostsComponent,
            },
            {
                path: 'post',
                children: [
                    {
                        path: ':id',
                        component: PostComponent,
                        resolve: {
                            PostResolver,
                        },
                        children: [
                            {
                                path: 'comments',
                                component: CommentsComponent,
                                resolve: {
                                    CommentsResolver,
                                },
                            },
                        ],
                    },
                    {
                        path: '',
                        redirectTo: '/posts',
                    },
                ],
            },
            {
                path: 'comments/:id',
                component: CommentComponent,
                resolve: {
                    CommentResolver,
                },
            },
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        component: UsersComponent,
                    },
                    {
                        path: ':id',
                        component: UserComponent,
                        resolve: {
                            UserResolver,
                        },
                        children: [
                            {
                                path: 'posts',
                                component: PostsComponent,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
