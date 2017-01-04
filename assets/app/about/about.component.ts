import { Component, OnInit,  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import {routerTransition} from "../router.animations";

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  animations: [routerTransition()],

})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}