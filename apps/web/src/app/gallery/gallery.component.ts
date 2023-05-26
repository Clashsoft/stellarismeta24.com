import {Component, OnInit} from '@angular/core';
import {map, Observable, switchMap, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {EmpireService} from "../services/empire.service";
import {FilterEmpireDto} from "@stellarismeta24.com/types";

@Component({
  selector: 'sm-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  filter: FilterEmpireDto = {};

  gameVersions = [
    '3.8',
  ];
  tags: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private empireService: EmpireService,
  ) {
  }

  ngOnInit() {
    this.empireService.getTags().subscribe(tags => this.tags = tags);
    this.route.queryParams.pipe(
      map(({gameVersion, tags, text}) => this.filter = ({
        gameVersion,
        tags: tags?.split(','),
        text,
      })),
      switchMap(filter => this.empireService.findAll(filter)),
    ).subscribe();
  }
}
