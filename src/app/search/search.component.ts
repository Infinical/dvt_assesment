import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsService } from '../api/artists.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchString: string = '';
  isSpinning = false;
  constructor(private artistService: ArtistsService, private router: Router) {}

  ngOnInit(): void {}

  search() {
    this.isSpinning = true;
    this.artistService
      .searchArtist(this.searchString)
      .subscribe((data: any) => {
        this.isSpinning = false;
 
          this.router.navigateByUrl('artist', { state: data });
        
      });
  }
}
