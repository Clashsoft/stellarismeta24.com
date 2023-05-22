import {Route} from '@angular/router';
import {EditEmpireComponent} from "./edit-empire/edit-empire.component";
import {SelectEmpireComponent} from "./select-empire/select-empire.component";

export const appRoutes: Route[] = [
  {path: ':id/edit', component: EditEmpireComponent},
  {path: 'new', component: EditEmpireComponent},
  {path: 'random', component: EditEmpireComponent},
  {path: '', component: SelectEmpireComponent},
];
