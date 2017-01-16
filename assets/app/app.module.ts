import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SliderComponent } from './slider/slider.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { ClassesComponent } from "./classes/classes.component";

import { AuthService } from "./auth/auth.service";
import { ClassService } from "./classes/class.service";
import {ClassInputComponent} from "./classes/class-input.component";
import {ClassComponent} from "./classes/class.component";
import {FooterComponent} from "./footer/footer.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ViewerComponent} from "./gallery/viewer.component";
import {StaffsComponent} from "./staff/staffs.component";
import {StaffComponent} from "./staff/staff.component";
import {StaffService} from "./staff/staff.service";
import {StaffInputComponent} from "./staff/staff-input.component";
import { MaterialModule } from '@angular/material';
import {StaffDetailsComponent} from "./staff/staff-details.component";
import {AboutStoreComponent} from "./about/about-store.component";



@NgModule({
    declarations: [
	    AppComponent,
	    NavigatorComponent,
	    SliderComponent,
	    HomeComponent,
	    AboutComponent,
		AboutStoreComponent,
	    AuthenticationComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ClassesComponent,
        ClassComponent,
		ClassInputComponent,
		FooterComponent,
		GalleryComponent,
		ViewerComponent,
		StaffsComponent,
		StaffComponent,
		StaffInputComponent,
		StaffDetailsComponent

    ],
    imports: [
    	BrowserModule, 
    	routing,
    	FormsModule,
    	HttpModule,
    	ReactiveFormsModule,
		MaterialModule.forRoot()

    	],
    providers: [
    	AuthService,
		ClassService,
		StaffService
	],
    bootstrap: [AppComponent]
})
export class AppModule {

}