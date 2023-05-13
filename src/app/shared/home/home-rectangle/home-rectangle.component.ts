import { Component, Input } from '@angular/core';
import { HomeLink } from 'src/app/entites/home-links';

@Component({
  selector: 'app-home-rectangle',
  templateUrl: './home-rectangle.component.html',
  styleUrls: ['./home-rectangle.component.css']
})
export class HomeRectangleComponent {
  @Input() rectangles: HomeLink[];
}
