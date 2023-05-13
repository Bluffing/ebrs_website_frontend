import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDownLink } from 'src/app/entites';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  _route: ActivatedRoute;
  _router: Router;

  _dropDownList = [
    new DropDownLink('ACCUEIL', 'accueil', []),
    new DropDownLink('À PROPOS', 'a-propos', [
      new DropDownLink('Mot du pasteur', 'a-propos/mot-du-pasteur', []),
      new DropDownLink('Réunions', 'a-propos/reunions', []),
      new DropDownLink('Conseil', 'a-propos/conseil', []),
      new DropDownLink('Méditations', 'a-propos/meditation', []),
      new DropDownLink('FAQ', 'a-propos/faq', [])
    ]),
    new DropDownLink('POUR LES FAMILLES', 'famille', []),
    new DropDownLink('CENTRE ST-ROBERT', 'centre-st-robert', []),
    new DropDownLink('MEMBRES', 'membres', []),
    new DropDownLink('CONTACT', 'contact', [])
  ];

  _showHamburger = false;
  _weirdClickHack = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this._route = route;
    this._router = router;
  }

  getName(i: number): string {
    return this._dropDownList[i].name;
  }
  getLinkNames(i: number): string[] {
    return this._dropDownList[i].sublinks.map(sl => sl.name);
  }
  getLinkNamesV2(ddl: DropDownLink): string[] {
    return ddl.sublinks.map(sl => sl.name);
  }
  getSelected(i: number): boolean {
    return this._dropDownList[i].selected;
  }

  select(i: number) {
    this._dropDownList[i].selected = true;
  }
  unselect(i: number) {
    this._dropDownList[i].selected = false;
  }

  clickLink(ddl: DropDownLink) {
    this._router.navigate([ddl.link]);
  }

  asIsOrder(a, b) {
    return 1;
  }

  showHamburger() {
    this._showHamburger = !this._showHamburger;
    this._weirdClickHack = this._showHamburger;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if (this._showHamburger && !this._weirdClickHack)
      this._showHamburger = false;

    this._weirdClickHack = false;
  }
}