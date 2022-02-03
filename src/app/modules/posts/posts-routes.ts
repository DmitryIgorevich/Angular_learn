import {Route} from '@angular/router';

import {PostsComponent} from 'modules/posts/components/posts/posts.component';
import {UsersComponent} from 'modules/posts/components/users/users.component';

export const postsRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: PostsComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
