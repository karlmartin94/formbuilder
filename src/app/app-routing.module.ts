import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DesignerComponent } from "./designer.component";
import { HomeComponent } from "./home.component";


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'designer', component: DesignerComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
    //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}