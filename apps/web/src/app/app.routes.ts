import { Route } from '@angular/router';
import {EditEmpireComponent} from "./edit-empire/edit-empire.component";

export const appRoutes: Route[] = [
  {path: ':id/edit', component: EditEmpireComponent},
  {path: '**', redirectTo: '/1/edit'},
];
