export class DropDownLink {
    name: string;
    link: string;
    sublinks: DropDownLink[];
    selected = false;

    constructor(name: string, link: string, sublinks: DropDownLink[], selected: boolean = false) {
        this.name = name;
        this.link = link;
        this.sublinks = sublinks;
        this.selected = selected;
    }
}
