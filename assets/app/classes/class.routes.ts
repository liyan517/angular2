import { Routes } from "@angular/router";

import { ClassesComponent } from "./classes.component";
import {ClassInputComponent} from "./class-input.component";

export const CLASS_ROUTES: Routes = [
    { path: '', component: ClassesComponent, pathMatch: 'full', data:[{category: "all"}] },
    { path: 'children', component: ClassesComponent, data:[{category: "children"}] }, /*can we pass input from here?*/
    { path: 'adults', component: ClassesComponent, data:[{category: "adult"}] },
    { path: 'addClass', component: ClassInputComponent }

];