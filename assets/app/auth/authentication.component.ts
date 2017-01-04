import {Component, ViewChild, Renderer, OnInit, ElementRef} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
})
export class AuthenticationComponent implements OnInit{
    @ViewChild('openSignIn') triggerModal;
    @ViewChild('closeSignIn') closeModal;

    ngOnInit(): void {
        this.triggerButton(this.triggerModal);
        this.authService.doneSignIn.subscribe(
            (isDone: boolean) => {
                if (isDone){
                    console.log("close modal");
                    this.triggerButton(this.closeModal);
                }
            }
        );
    }

    constructor(private authService: AuthService, private renderer : Renderer) {

    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    triggerButton(button : ElementRef){
        let event = new MouseEvent('click', {bubbles: true});
        console.log(button);
        this.renderer.invokeElementMethod(
            this.triggerModal.nativeElement, 'dispatchEvent', [event]);
    }


}