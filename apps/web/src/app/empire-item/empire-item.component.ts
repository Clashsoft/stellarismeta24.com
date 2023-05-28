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
    const storageKey = `empires/${this.empire._id}/rating`;
    const oldRating = +(globalThis?.localStorage.getItem(storageKey) || 0) || undefined;
    this.empireService.rate(this.empire._id, {
      rating,
      oldRating,
    }).subscribe(empire => {
      globalThis?.localStorage.setItem(storageKey, String(rating));
      this.empire.rating = empire.rating;
      this.empire.ratings = empire.ratings;
    });
  }
}
