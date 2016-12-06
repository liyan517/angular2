import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
	sliderImage = [
		{"src": "/imgs/sliderImgs/1.JPG", "active": true},
		{"src": "/imgs/sliderImgs/2.JPG", "active": false}
	]
  constructor() { }

  setActiveSlider(item) {
  	return item.active
  }
  ngOnInit() {
  }

}
