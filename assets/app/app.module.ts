import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SliderComponent } from './slider/slider.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about.component';
import { routing } from './app.routing';
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { ClassesComponent } from "./classes/classes.component";

import { AuthService } from "./auth/auth.service";
import { ClassService } from "./classes/class.service";



@NgModule({
    declarations: [
	    AppComponent,
	    NavigatorComponent,
	    SliderComponent,
	    HomeComponent,
	    AboutComponent,
	    AuthenticationComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ClassesComponent

    ],
    imports: [
    	BrowserModule, 
    	routing,
    	FormsModule,
    	HttpModule,
    	ReactiveFormsModule

    	],
    providers: [AuthService, ClassService],
    bootstrap: [AppComponent]
})
export class AppModule {

}