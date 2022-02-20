import {Routes} from '@angular/router';

import {NavigationComponent} from 'app/app-routing-module/components/navigation/navigation.component';

import {MarketComponent} from 'modules/market-page/components/market/market.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'navigation',
        pathMatch: 'full',
    },
    {
        path: 'navigation',
        component: NavigationComponent,
    },
    {
        path: 'market',
        component: MarketComponent,
    },
    {
        path: 'posts',
        loadChildren: () => import('app/modules/posts/posts.module')
            .then(module => module.PostsModule),
    },
];
