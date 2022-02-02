import {NgModule} from '@angular/core';
import {
    PreloadAllModules,
    RouterModule,
} from '@angular/router';

import {appRoutes} from 'app/app-routing-module/app-routes';

import {NavigationComponent} from 'app/app-routing-module/components/navigation/navigation.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                preloadingStrategy: PreloadAllModules,
            },
        ),
    ],
    declarations: [
        NavigationComponent,
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {}
