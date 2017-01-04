import {Component, OnInit} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

import { Class } from "./class.model";
import { ClassService } from "./class.service";

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {
    ngOnInit(): void {
        this.getClass();
    }
    myForm: FormGroup;
    category: string;
    classes : Class[];
    isEmptyClasses : boolean;

    constructor(private classService: ClassService, private router: Router, private route: ActivatedRoute) {
        this.category = route.snapshot.data[0]['category'];
        this.isEmptyClasses = false;
    }

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

    getClass(){
        this.classService.getClass(this.category).subscribe(
            (classObjs : Class[]) => {
                this.classes = classObjs;
                if(this.classes.length == 0){
                    console.log("Empty classes ");
                    this.isEmptyClasses = true;
                }
            }
        );
    }


}