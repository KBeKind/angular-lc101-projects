import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Really Awesome Pictures';
  image1 = 'https://pt-web-dev-jan-23.github.io/js-assignment-4-html-me-something-KBeKind/images/bright-mystic-valley.jpg';
  image2 = 'https://pt-web-dev-jan-23.github.io/js-assignment-4-html-me-something-KBeKind/images/magic-team.png';
  image3 = 'https://pt-web-dev-jan-23.github.io/js-assignment-4-html-me-something-KBeKind/images/hero.jpg';

  constructor() { }

  ngOnInit() {
  }

}