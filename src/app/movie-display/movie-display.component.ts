import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
})
export class MovieDisplayComponent {
  @Input() movie: any;

  @Output() rentMovie = new EventEmitter();

  onRentalButtonClick() {
    // send signal to parent

    this.rentMovie.emit(this.movie);
  }
}
