import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[] = ["https://github.com/KBeKind","https://pt-web-dev-jan-23.github.io/js-assignment-4-html-me-something-KBeKind/"];
    constructor() { }

ngOnInit() {
}

}
