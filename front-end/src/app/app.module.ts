import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { SearchbarReducer } from './reducers/searchbar.reducer';
import { GuestsTableReducer } from './reducers/guests-table.reducer';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { GuestsTableComponent } from './guests-table/guests-table.component';
import { LettersCardComponent } from './letters-card/letters-card.component';
import { LettersCardReducer } from './reducers/letters-card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    GuestsTableComponent,
    LettersCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonModule,
    StoreModule.forRoot({
      searchbar: SearchbarReducer,
      guestsTable: GuestsTableReducer,
      lettersCard: LettersCardReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
