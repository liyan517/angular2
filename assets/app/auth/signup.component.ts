import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {AuthService} from "./auth.service";
import {User} from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    isHideFailed: boolean;
    isHideSuccess: boolean;
    message : string;

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signup(user)
            .subscribe(
                data => {
                    console.log(data);
                    this.isHideSuccess = false;
                    this.isHideFailed = true;
                    this.message = data.message + " Please login using your new account";
                },

                error => {
                    console.error(error);
                    this.isHideSuccess = true;
                    this.isHideFailed = false;
                    this.message = error.message + " Please check your information is correct";
                }
            );
        this.myForm.reset();
    }



    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
        this.isHideFailed = true;
        this.isHideSuccess = true;
    }
}