import {Component, OnInit} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

import { Staff } from "./staff.model";
import { StaffService } from "./staff.service";

@Component({
    selector: 'app-staffs-snap',
    templateUrl: 'staffsSnap.component.html'
})
export class StaffsSnapComponent implements OnInit {
    ngOnInit(): void {
        this.getStaffs();
    }
    myForm: FormGroup;
    category: string;
    staffs : Staff[];
    isEmptyStaffs : boolean;

    constructor(private staffService: StaffService, private router: Router, private route: ActivatedRoute) {

        this.isEmptyStaffs = true;
    }

    addStaff() {
        const classObj = new Staff(this.myForm.value.className, this.myForm.value.description,
            this.myForm.value.category, this.myForm.value.fee, this.myForm.value.time);
        this.staffService.addStaff(classObj)
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

    getStaffs(){
        this.staffService.getAllStaffs().subscribe(
            (classObjs : Staff[]) => {
                this.staffs = classObjs;
                if(this.staffs.length == 0){
                    console.log("Empty staffs ");
                    this.isEmptyStaffs = true;
                }
                else{
                    this.isEmptyStaffs = false;
                }
            }
        );
    }


}