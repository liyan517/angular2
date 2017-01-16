import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import { NgForm } from "@angular/forms";

import { ClassService } from "./class.service";
import { Class } from "./class.model";
import {error} from "util";

@Component({
    selector: 'app-class-input',
    templateUrl: 'class-input.component.html',
    styleUrls: [`
    .ng-touched.ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
    }
    
    .ng-touched.ng-invalid:not(form)  {
      border-left: 5px solid #a94442; /* red */
    }
    
        
    `]
})
export class ClassInputComponent implements OnInit {
    @Input() class: Class;
    categories = ["adult", "children"];
    message : string;
    isValid: boolean;

    constructor(private classService: ClassService) {
        this.isValid = true;
    }

    /*    constructor(public className: string,
     public category: string,
     public fee: number,
      public picURL?: string,
     public description?: string,
     public time?: string,
     public classId?: string) */
    onSubmit(form: NgForm) {
        if (this.class) {
            // Edit
            this.class.category = form.value.category;
            this.class.className = form.value.className;
            this.class.fee = form.value.fee;
            this.class.picURL = form.value.picURL;

            this.class.time = form.value.time;
            this.class.description = form.value.description;
            console.log(this.class);

            this.classService.updateClass(this.class)
                .subscribe(
                    result => console.log(result)
                );
            this.classService.finishEdit(this.class.category);//return false when done to hide the input field
            this.class = null;
            form.resetForm();
        } else {
            // Create
            console.log("create new class with category" + form.value.category);
            const classObj = new Class(
                form.value.className,
                form.value.category,
                form.value.fee,
                form.value.picURL,
                form.value.description,
                form.value.time
            );
            console.log(classObj);
            this.classService.addClass(classObj)
                .subscribe(
                    data => {
                        console.log(data);
                        form.resetForm();
                        this.isValid = true;

                    },
                    error => {
                        console.error(error);
                        console.log(error);
                        this.isValid = false;
                        this.message = error.error.message;
                        console.log(this.message);
                    }

                );
        }

    }

    onClear(form: NgForm) {
        this.class = null;
        form.resetForm();
    }

    /*TODO If currently is editing a class, set the class obj as the class being editing
    * need to call the editClass method when you want to edit a class*/
    ngOnInit() {
        console.log("init class input");
        this.classService.classIsEdit.subscribe(
            (classObj: Class) => this.class = classObj
        );
    }
}