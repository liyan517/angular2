import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import { NgForm } from "@angular/forms";

import {StaffService} from "./staff.service";
import { Staff } from "./staff.model";

@Component({
    selector: 'app-staff-input',
    templateUrl: 'staff-input.component.html',
    styleUrls: [`
    .ng-touched.ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
    }
    
    .ng-touched.ng-invalid:not(form)  {
      border-left: 5px solid #a94442; /* red */
    }
    
        
    `]
})
export class StaffInputComponent implements OnInit {
    @Input() staff: Staff;
    titles = ["Art practitioner"];
    picUrlPrefix = "/imgs/teachers/";
    message : string;
    isValid: boolean;

    constructor(private staffService: StaffService) {
        this.isValid = true;
    }

    /*  public staffName: string,
     public jobTitle: string,
     public classIds: string,
     public profilePicUrl?: string,
     public dateOfBirth?: string,
     public country?: string,
     public degree? : string,
     public experience? : string,
     public details?: string,
     public staffId?: string */
    onSubmit(form: NgForm) {
        if (this.staff) {
            // Edit
            this.staff.staffName = form.value.staffName;
            this.staff.jobTitle = form.value.title;
      //      this.staff.classIds = form.value.time; //should be selected
            this.staff.details = form.value.details;
            this.staff.profilePicUrl = this.picUrlPrefix + form.value.picture;
            this.staff.country = form.value.country;
            this.staff.degree = form.value.degree;
            this.staff.experience = form.value.experience;
            this.staff.dateOfBirth = form.value.birthDate;
            console.log(this.staff);

            this.staffService.updateStaff(this.staff)
                .subscribe(
                    result => console.log(result)
                );
            this.staffService.finishEdit();
            this.staff = null;
            form.resetForm();
        } else {
            // Create
            console.log("create new staff ");
            const staffObj = new Staff(form.value.staffName, form.value.title, form.value.classIds, this.picUrlPrefix + form.value.picture,
                form.value.birthDate, form.value.country, form.value.degree, form.value.experience, form.value.details);
            console.log(staffObj);
            this.staffService.addStaff(staffObj)
                .subscribe(
                    data => {
                        console.log(data);
                        alert(data.message);
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
        this.staff = null;
        form.resetForm();
    }

    cancelEdit(){
        this.staffService.finishEdit();
    }

    ngOnInit() {
        console.log("init class input");
        this.staffService.staffIsEdit.subscribe(
            (staffObj: Staff) => this.staff = staffObj
        );
    }
}