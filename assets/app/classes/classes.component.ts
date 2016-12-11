import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Class } from "./class.model";
import { ClassService } from "./class.service";

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html'
})
export class ClassesComponent {
    myForm: FormGroup;

    constructor(private classService: ClassService, private router: Router) {}

    addClass() {
        const classObj = new Class(this.myForm.value.className, this.myForm.value.description,
            this.myForm.value.category, this.myForm.value.fee, this.myForm.value.time);
        this.classService.addClass(classObj)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }


}