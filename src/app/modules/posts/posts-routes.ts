import {Route} from '@angular/router';

import {PostsComponent} from 'modules/posts/components/posts/posts.component';
import {UsersComponent} from 'modules/posts/components/users/users.component';
import {PostComponent} from 'modules/posts/components/post/post.component';
import {PostResolver} from 'modules/posts/resolver/post.resolver';
import {UserResolver} from 'modules/posts/resolver/user.resolver';
import {UserComponent} from 'modules/posts/components/user/user.component';

export const postsRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: PostsComponent,
    },
    {
        path: 'post/:id',
        component: PostComponent,
        resolve: {
            post: PostResolver,
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
                    user: UserResolver,
                },
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
