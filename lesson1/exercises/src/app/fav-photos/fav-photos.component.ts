import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Adrienne's Photos";
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://media.istockphoto.com/photos/curious-kitten-looking-at-the-camera-picture-id1270023880?b=1&k=20&m=1270023880&s=170667a&w=0&h=7tAE4L2d7qJ4k1OMydwof1kObkG6TuNkDj2n2QC88ic=';
  image3 = 'https://media.istockphoto.com/photos/kitten-looking-up-picture-id1281700863?b=1&k=20&m=1281700863&s=170667a&w=0&h=-ikJUy0bE3hxaVARLuiE3bo4ovced0XJUL3UtVVHXA0=';

  constructor() { }

  ngOnInit() {
  }

}