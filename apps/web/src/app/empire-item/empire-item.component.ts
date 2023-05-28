import {Component, Input} from '@angular/core';
import {EmpireDto} from "@stellarismeta24.com/types";
import {EmpireService} from "../services/empire.service";

@Component({
  selector: 'sm-empire-item',
  templateUrl: './empire-item.component.html',
  styleUrls: ['./empire-item.component.scss'],
})
export class EmpireItemComponent {
  @Input() empire!: EmpireDto;

  constructor(
    private readonly empireService: EmpireService,
  ) {
  }

  rate(rating: number) {
    this.empireService.rate(this.empire._id, {
      rating,
    }).subscribe(empire => {
      this.empire.rating = empire.rating;
      this.empire.ratings = empire.ratings;
    });
  }
}
