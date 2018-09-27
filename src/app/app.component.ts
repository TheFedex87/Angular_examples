import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title: "Title",
    isFavourite: true
  }

  tweet = {
    body: 'Here is a tweet...',
    isLiked: true,
    likesCount: 10
  }

  onFavouriteChange(eventArgs: FavouriteChangedEventArgs){
    console.log("Favourite is changed: ", eventArgs);
  }
}
