import {Component, OnInit} from '@angular/core';
import {EmpireService} from "../services/empire.service";
import {EmpireDto} from "@stellarismeta24.com/types";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'sm-empire-preview',
  templateUrl: './empire-preview.component.html',
  styleUrls: ['./empire-preview.component.scss'],
})
export class EmpirePreviewComponent implements OnInit {
  empire!: EmpireDto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private empireService: EmpireService,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.empireService.findOne(id)),
    ).subscribe(empire => {
      this.empire = empire;
    });
  }
}
