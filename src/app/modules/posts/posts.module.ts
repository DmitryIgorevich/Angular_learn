import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainPostsComponent} from 'modules/posts/components/main-posts/main-posts.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MainPostsComponent,
    ],
    exports: [
    ],
})
export class PostsModule {}
