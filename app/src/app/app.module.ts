import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { GuestListNavbarComponent } from './components/guest-list-navbar/guest-list-navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { GuestsTableComponent } from './components/guests-table/guests-table.component';
import { LettersCardComponent } from './components/letters-card/letters-card.component';
import { GuestsCounterComponent } from './components/guests-counter/guests-counter.component';

import { GuestsTableReducer } from './reducers/guests-table.reducer';
import { SearchbarReducer } from './reducers/searchbar.reducer';
import { LettersCardReducer } from './reducers/letters-card.reducer';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { EventListComponent } from './components/event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestListNavbarComponent,
    SearchbarComponent,
    GuestsTableComponent,
    LettersCardComponent,
    GuestsCounterComponent,
    GuestListComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
