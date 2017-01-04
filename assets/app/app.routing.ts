import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { CLASS_ROUTES } from "./classes/class.routes";
import {ClassInputComponent} from "./classes/class-input.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {StaffsComponent} from "./staff/staffs.component";
import {StaffInputComponent} from "./staff/staff-input.component";



const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
	{ path: 'classes', children: CLASS_ROUTES },
	{ path: 'addClass', component: ClassInputComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'staffs', component: StaffsComponent },
	{ path: 'addStaff', component: StaffInputComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);