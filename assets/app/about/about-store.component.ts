import { Component, OnInit,  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import {routerTransition} from "../router.animations";

@Component({
  selector: 'app-about-store',
  templateUrl: 'about-store.component.html',
  styleUrls: ['about.component.css'],
  animations: [routerTransition()],

})
export class AboutStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}