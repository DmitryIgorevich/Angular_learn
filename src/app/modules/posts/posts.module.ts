import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {PostsRoutingModule} from 'modules/posts/posts-routing.module';
import {MainPostsComponent} from 'modules/posts/components/main-posts/main-posts.component';
import {PostMenuComponent} from 'modules/posts/components/post-menu/post-menu.component';
import {PostsComponent} from 'modules/posts/components/posts/posts.component';
import {PostComponent} from 'modules/posts/components/post/post.component';
import {RequestService} from 'modules/base/services';
import {BASE_URL_TOKEN} from 'modules/base';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com/';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PostsRoutingModule,
    ],
    declarations: [
        MainPostsComponent,
        PostMenuComponent,
        PostsComponent,
        PostComponent,
    ],
    exports: [
    ],
    providers: [
        RequestService,
        {
            provide: BASE_URL_TOKEN,
            useValue: BASE_URL,
        },
    ],
})
export class PostsModule {}
