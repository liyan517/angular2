import {Component, OnInit, Input} from "@angular/core";

import { Staff } from "./staff.model";
import { StaffService } from "./staff.service";
import { Router} from "@angular/router";

@Component({
    selector: 'app-staff',
    templateUrl: 'staff.component.html'
/*    styleUrls: [`
    #staffEdit{
        margin-top: 30px;
    }

    `]*/

})

export class StaffComponent implements OnInit{
    @Input() staff: Staff;
    isHideInput= false;

    constructor(private staffService: StaffService, private router: Router) {
        this.isHideInput = true;
    }

    onEdit(){
        this.isHideInput=false;
        console.log("edit class: " + this.staff.staffName);
      //  this.router.navigateByUrl("/addStaff", { skipLocationChange: true });

        this.staffService.editStaff(this.staff);
    }

    onDelete() {
        this.staffService.deleteStaff(this.staff)
            .subscribe(
                result => console.log(result)
            );
    }

    goToStaffDetails(){
        console.log("navigate to staff id " + this.staff.staffId);
        this.router.navigate(['/staffs', this.staff.staffId]);
    }

    /*TODO If currently is editing a class, set the class obj as the class being editing
     * need to call the editStaff method when you want to edit a class*/
    ngOnInit() {
        console.log("init class component");
        this.staffService.isEditDone.subscribe(
            (isDone: boolean) => this.isHideInput = isDone
        );
    }

}