import {Routes} from '@angular/router';

import {MarketComponent} from 'app/modules/market-page/components/market/market.component';
import {NavigationComponent} from 'app/modules/navigation-page/components/navigation/navigation.component';
import {TestComponent} from 'app/modules/test-page/pages/test/test.component';
import {testModuleRoutes} from 'app/modules/test-page/test.module';

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
        path: 'test',
        component: TestComponent,
        children: testModuleRoutes,
    },
];
