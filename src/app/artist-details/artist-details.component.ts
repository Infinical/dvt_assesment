import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ArtistsService } from '../api/artists.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent implements OnInit {
  details!: any;
  songDetails!: any;
  albumDetails!: any;
  artistDetails!: any;

  constructor(private router: Router, private artistsService: ArtistsService) {}

  ngOnInit(): void {
    this.details = history.state;

    if (!this.details.artist) {
      this.router.navigateByUrl('');
    }

    this.getData();
  }

  getData() {
    forkJoin([
      this.artistsService.getTopSongs(this.details.artist.id),
      this.artistsService.getAlbums(this.details.artist.id),
      this.artistsService.getArtistDetails(this.details.artist.id),
    ]).subscribe((data) => {
      console.log(data);
      this.songDetails = data[0];
      this.albumDetails = data[1];
      this.artistDetails = data[2];
    });
  }
}
