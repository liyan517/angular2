import {Component, OnInit, Input} from "@angular/core";

import { Class } from "./class.model";
import { ClassService } from "./class.service";
import { Router} from "@angular/router";

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css']

})

export class ClassComponent implements OnInit{
    @Input() class: Class;
    isHideInput= false;

    constructor(private classService: ClassService, private router: Router) {
        this.isHideInput = true;
    }

    onEdit(){
        this.isHideInput=false;
        console.log("edit class: " + this.class.category);
      //  this.router.navigateByUrl("/addClass", { skipLocationChange: true });

        this.classService.editClass(this.class);
    }

    onDelete() {
        this.classService.deleteClass(this.class)
            .subscribe(
                result => console.log(result)
            );
    }

    /*TODO If currently is editing a class, set the class obj as the class being editing
     * need to call the editClass method when you want to edit a class*/
    ngOnInit() {
        console.log("init class component");
        this.classService.isEditDone.subscribe(
            (isDone: boolean) => this.isHideInput = isDone
        );
    }

}