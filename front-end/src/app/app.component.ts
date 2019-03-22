import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';

export interface Guest {
  name: string;
  present: boolean,
}

const GUESTS_DATA: Guest[] = [
  { name: 'Huguinho', present: false },
  { name: 'Zezinho', present: true },
  { name: 'Luizinho', present: false },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchBarActive: boolean = false;
  displayedColumns: string[] = ['name', 'present'];
  dataSource = new MatTableDataSource(GUESTS_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
