import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string){
     
         let upperCaseTitles = [];
         for (let i=0; i < this.movies.length; i++){
            upperCaseTitles.push(this.movies[i].toUpperCase());
         }
         let errorMsg = '';
         if(newTitle === ''){
            errorMsg = 'Please enter a movie title.';
         } else if (upperCaseTitles.includes(newTitle.toUpperCase())) {
            errorMsg = `${newTitle} is already in your movie list.`;
         } else {
            let newTitleArr = newTitle.split(' ');
            for(let i = 0; i < newTitleArr.length; i++){
               let innerArr = newTitleArr[i].split('');
               innerArr[0] = innerArr[0].toUpperCase();
               newTitleArr[i] = innerArr.join('');
            }
            newTitle = newTitleArr.join(' ');

            this.movies.push(newTitle);
         }
         return errorMsg;
      
   }
}