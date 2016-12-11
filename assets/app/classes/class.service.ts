import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Class } from "./class.model";

@Injectable()
export class ClassService {
    constructor(private http: Http) {}


    addClass(classObj: Class) {
        const body = JSON.stringify(classObj);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/class', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getClass(classObj: Class) {
        const body = JSON.stringify(classObj);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/class', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


}