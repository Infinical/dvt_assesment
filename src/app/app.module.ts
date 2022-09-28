import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsComponent } from './artists/artists.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzListModule } from 'ng-zorro-antd/list';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { StoreModule } from '@ngrx/store';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { reducers, metaReducers } from './reducers';
import { SearchComponent } from './search/search.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzAvatarModule,
    NzGridModule,
    NzButtonModule,
    NzLayoutModule,
    NzCardModule,
    NzStatisticModule,
    NzListModule,
    NzSpinModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
