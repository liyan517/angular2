import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: [`
        .footerRow{
        color: white;
        margin-left: 25%;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 10px;
        width: 60%;
    }
    
    #appFooter{
	background-color: darkblue;
    margin-bottom: 30px;
    margin-top: 30px;
    box-shadow: 0px -5px 10px lightgray;
}

    `]
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}