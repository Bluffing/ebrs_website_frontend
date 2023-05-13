import { Component, Input } from '@angular/core';
import { HomeLink } from 'src/app/entites/home-links';

@Component({
  selector: 'app-home-circle',
  templateUrl: './home-circle.component.html',
  styleUrls: ['./home-circle.component.css']
})
export class HomeCircleComponent {
  @Input() circles: HomeLink[];
}
