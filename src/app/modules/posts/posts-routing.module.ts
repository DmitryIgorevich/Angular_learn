import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {postsRoutes} from './posts-routes';

@NgModule({
    imports: [
        RouterModule.forChild(postsRoutes),
    ],
    exports: [
    ],
})
export class PostsRoutingModule {}
