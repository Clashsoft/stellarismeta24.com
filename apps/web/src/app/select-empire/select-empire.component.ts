import { Component } from '@angular/core';

@Component({
  selector: 'sm-select-empire',
  templateUrl: './select-empire.component.html',
  styleUrls: ['./select-empire.component.scss'],
})
export class SelectEmpireComponent {
  empires = [
    {
      _id: 1,
      name: 'Terran Protectorate',
      type: 'Military Commissariat',
      species: 'Humanoid',
    },
    {
      _id: 2,
      name: 'Mechazur Expungers',
      type: 'Rogue Defense System',
      species: 'Machine',
    },
    {
      _id: 3,
      name: 'Imperium Romanum',
      type: 'Martial Empire',
      species: 'Humanoid',
    },
  ];
}
