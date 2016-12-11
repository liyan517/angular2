import { Routes } from "@angular/router";

import { ClassesComponent } from "./classes.component";

export const CLASS_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'children', component: ClassesComponent }, /*can we pass input from here?*/
    { path: 'adult', component: ClassesComponent }
    
];