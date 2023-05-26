import {Component, Input} from '@angular/core';
import {EmpireDto} from "@stellarismeta24.com/types";

@Component({
  selector: 'sm-empire-item',
  templateUrl: './empire-item.component.html',
  styleUrls: ['./empire-item.component.scss'],
})
export class EmpireItemComponent {
  @Input() empire!: EmpireDto;
}
