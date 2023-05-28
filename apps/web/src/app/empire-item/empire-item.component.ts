import {Component, Input, OnInit} from '@angular/core';
import {EmpireDto} from "@stellarismeta24.com/types";
import {EmpireService} from "../services/empire.service";

@Component({
  selector: 'sm-empire-item',
  templateUrl: './empire-item.component.html',
  styleUrls: ['./empire-item.component.scss'],
})
export class EmpireItemComponent implements OnInit {
  @Input() empire!: EmpireDto;

  userRating?: number;

  constructor(
    private readonly empireService: EmpireService,
  ) {
  }

  ngOnInit() {
    this.userRating = +(globalThis?.localStorage.getItem(`empires/${this.empire._id}/rating`) || 0) || undefined;
  }

  rate(rating: number) {
    this.empireService.rate(this.empire._id, {
      rating,
      oldRating: this.userRating,
    }).subscribe(empire => {
      this.userRating = rating;
      globalThis?.localStorage.setItem(`empires/${this.empire._id}/rating`, String(rating));
      this.empire.rating = empire.rating;
      this.empire.ratings = empire.ratings;
    });
  }
}
