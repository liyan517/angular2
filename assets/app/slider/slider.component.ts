import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
	sliderImage = [
		{"src": "/imgs/sliderImgs/1.jpg", "active": true},
		{"src": "/imgs/sliderImgs/2.jpg", "active": false},
    {"src": "/imgs/sliderImgs/3.jpg", "active": false},
    {"src": "/imgs/sliderImgs/4.jpg", "active": false},

	]
  constructor() { }

  setActiveSlider(item) {
  	return item.active
  }
  ngOnInit() {
  }

}
