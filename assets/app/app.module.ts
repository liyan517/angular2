import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { SliderComponent } from './slider/slider.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about.component';
import { routing } from './app.routing';


@NgModule({
    declarations: [
	    AppComponent,
	    NavigatorComponent,
	    SliderComponent,
	    HomeComponent,
	    AboutComponent

    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}