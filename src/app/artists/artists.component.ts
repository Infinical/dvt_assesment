import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  artists!: any;
  noOfAlbums!: string;

  constructor( private router: Router) {}

  ngOnInit(): void {
    this.artists = history.state.data;
    this.noOfAlbums = history.state.total;
    if (!history.state.data) {
      this.router.navigateByUrl('');
    }
  }

  onClick(details: any) {
    this.router.navigateByUrl('details', { state: details });
  }
}
