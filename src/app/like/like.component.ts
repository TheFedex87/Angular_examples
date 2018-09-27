import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'twitter-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLiked;
  @Input() likesCount;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.isLiked==true){
      this.likesCount--;
    } else {
      this.likesCount++;
    }
    this.isLiked = !this.isLiked;
  }

}
