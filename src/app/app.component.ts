import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'excercises';
  wingCommander = {
    title: 'Wing Commander',
    yearReleased: 1999,
    rating: 'PG-13',
    imdbLink: 'https://www.imdb.com/title/tt0131646/',
    soundtrack: {
      spotifyLink:
        'https://open.spotify.com/album/6kYCucnWN8EzKDCro12m5x?si=rR_Sb8NbQ62AYQHjN6tlXw',
    },
  };

  rentalList = {
    count: 4,
    titles: 'cats , howard the duck, jack and jill, batman',
  };

  theRoom = {
    title: 'The Room',
    year: 2003,
    stars: 3.7,
    rating: 'R',
    director: 'Tommy Wiseau',
    cast: ['Tommy Wiseau', 'Juliette Danielle', 'Greg Sestero'],
    imdblink: 'https://www.imdb.com/title/tt0368226/',
    image: '/images/the-room.jpg',
  };
  // addRental(movie:any){
  //   this.rentalList.count++;
  //   this.rentalList.titles +=", "

  //    + movie.title;
  //   //  console.log(this.rentalList);

  // }
  onRentMovie(movie: any) {
    // console.log("movie rented");
    console.log('movie rented' + ' ' + movie.title);
    this.rentalList.count++;
    this.rentalList.titles += ', ' + movie.title;
  }
  clearRentalMovies(){
    // console.log('movie rented' + ' ' + movie.title);
    this.rentalList.count=0;
    this.rentalList.titles=" ";
  }
}
