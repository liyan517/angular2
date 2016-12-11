import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about.component";
import {ClassesComponent} from "./classes/classes.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { CLASS_ROUTES } from "./classes/class.routes";



const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
	{ path: 'classes', component: ClassesComponent, children: CLASS_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);