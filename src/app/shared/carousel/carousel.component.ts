import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {
  	@Input() overlay = true;
	@Input() overlayText = "";

	showNavigationArrows = true;
	showNavigationIndicators = true;
	// images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

	images = [
		'http://www.ebrs.ca/wp-content/uploads/2015/03/278545306_743841467060616_5099129747695824033_n-1265x573.jpg',
		'http://www.ebrs.ca/wp-content/uploads/2017/06/web-gs-1248x573.png',
		'http://www.ebrs.ca/wp-content/uploads/2015/03/img_slide_famille-1265x573.jpg',
	]

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
