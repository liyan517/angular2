import {Injectable, EventEmitter} from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Class } from "./class.model";

@Injectable()
export class ClassService {
    constructor(private http: Http) {}
    classes : Class[] = [];
    classIsEdit = new EventEmitter<Class>();
    isEditDone = new EventEmitter<boolean>();


    addClass(classObj: Class) {
        const body = JSON.stringify(classObj);
        console.log("add class at service: " + body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/class/addClass', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    /*    constructor(public className: string,
     public category: string,
     public fee: number,
     public description?: string,
     public time?: string
     ) {}*/

    getClass(category: string) {
        const body = JSON.stringify({category: category});
        console.log("get classes of " + category);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/class', body, {headers: headers})
            .map((response: Response) => {
                const classObjs = response.json().obj;
                let transformedClasses: Class[] = [];
                for (let classObj of classObjs){
                    console.log("get class id: " + classObj._id);
                    transformedClasses.push(new Class(classObj.className, classObj.category, classObj.fee,
                    classObj.picURL, classObj.description, classObj.time, classObj._id))
                }
                this.classes = transformedClasses;
                return transformedClasses;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updateClass(classObj: Class){
        const body = JSON.stringify(classObj);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log(classObj.classId);
        return this.http.patch('http://localhost:3000/class/' + classObj.classId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

    }

    editClass(classObj: Class) {
        this.classIsEdit.emit(classObj);
    }

    finishEdit(category: string){
        console.log("Finish editing class" );
        this.isEditDone.emit(true);
        this.getClass(category);
    }
    deleteClass(classObj : Class) {
        console.log("delet class: " + classObj.className);
        this.classes.splice(this.classes.indexOf(classObj), 1);
        return this.http.delete('http://localhost:3000/class/' + classObj.classId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


}