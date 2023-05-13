import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDownLink } from 'src/app/entites';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css'],
})
export class DropdownlistComponent {
  _route: ActivatedRoute;
  _router: Router;

  @Input() listOfLinks: DropDownLink[];
  @Input() selected = false;
  ontopof = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this._route = route;
    this._router = router;
  }
  
  goOnTopOf() {
    this.ontopof = true;
    console.log('bleak');
  }
  leaveOnTopOf() {
    this.ontopof = false;
  }

  clickLink(ddl: DropDownLink) {
    this._router.navigate([ddl.link]);
  }
}
