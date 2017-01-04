import {Component, OnInit, Input} from "@angular/core";

import { Staff } from "./staff.model";
import { StaffService } from "./staff.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-staff-details',
    templateUrl: 'staff-details.component.html',
    styleUrls: [`
        tr{
            height:50px;
            white-space: pre-line;
        }
        td{
            vertical-align: top; 
            
        }
        td:first-child{
            width: 100px;
        }
    
    `]

})

export class StaffDetailsComponent implements OnInit{
    id: string;
    @Input() staff: Staff;


    constructor(private staffService: StaffService, private route: ActivatedRoute) {
        this.staff = new Staff(null,null);
    }



    ngOnInit() {
        console.log("init class component");
        this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.staffService.getStaffById(this.id).subscribe(
                (staffObj : Staff) => {
                    this.staff = staffObj;
                }
            );
        });

    }

}