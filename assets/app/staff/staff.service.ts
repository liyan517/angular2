import {Injectable, EventEmitter} from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Staff } from "./staff.model";

@Injectable()
export class StaffService {
    staffIsEdit = new EventEmitter<Staff>();
    constructor(private http: Http) {}
    staffs : Staff[] = [];
    isEditDone = new EventEmitter<boolean>();


    addStaff(staffObj: Staff) {
        const body = JSON.stringify(staffObj);
        console.log("add staff at service: " + body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/staff/addStaff', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
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
     public staffId?: string*/

    getAllStaffs() {

        console.log("get all staffs ");
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:3000/staff', {headers: headers})
            .map((response: Response) => {
                const staffObjs = response.json().obj;
                let transformedClasses: Staff[] = [];
                for (let staff of staffObjs){
                    console.log("get staff id: " + staff._id);
                    transformedClasses.push(new Staff(staff.staffName, staff.jobTitle, staff.classIds, staff.profilePicUrl,
                        staff.dateOfBirth, staff.country, staff.degree, staff.experience, staff.details, staff._id))
                }
                this.staffs = transformedClasses;
                return transformedClasses;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }


    editStaff(staffObj: Staff) {
        this.staffIsEdit.emit(staffObj);
    }

    updateStaff(staffObj: Staff){
        const body = JSON.stringify(staffObj);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log(staffObj.staffId);
        return this.http.patch('http://localhost:3000/staff/' + staffObj.staffId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

    }



    finishEdit(){
        console.log("Finish editing class" );
        this.isEditDone.emit(true);
        this.getAllStaffs();
    }
    deleteStaff(classObj : Staff) {
        console.log("delet class: " + classObj.staffName);
        this.staffs.splice(this.staffs.indexOf(classObj), 1);
        return this.http.delete('http://localhost:3000/staff/' + classObj.staffId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


}