import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['this','that','morstuf','Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];

   targetImage = 'https://pt-web-dev-jan-23.github.io/js-assignment-4-html-me-something-KBeKind/images/magic-seed.png';

   constructor() { }

   ngOnInit() {
   }

}
