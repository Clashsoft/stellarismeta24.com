import {Route} from '@angular/router';
import {EditEmpireComponent} from "./edit-empire/edit-empire.component";
import {SelectEmpireComponent} from "./select-empire/select-empire.component";
import {EmpirePreviewComponent} from "./empire-preview/empire-preview.component";

export const appRoutes: Route[] = [
  {
    path: ':id/edit',
    component: EditEmpireComponent,
    children: [
      {path: '', component: EmpirePreviewComponent},
    ],
  },
  {
    path: '',
    component: SelectEmpireComponent,
    children: [
      {path: ':id', component: EmpirePreviewComponent},
    ],
  },
];
