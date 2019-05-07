import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { EventListComponent } from './components/event-list/event-list.component';

const routes: Routes = [
  {
    path: '',
    component: GuestListComponent
  },
  {
    path: 'events',
    component: EventListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
