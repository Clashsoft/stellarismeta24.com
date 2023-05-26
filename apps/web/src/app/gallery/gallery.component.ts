import {Component, OnInit} from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {EmpireService} from "../services/empire.service";

@Component({
  selector: 'sm-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  selectedGameVersion?: string;
  selectedTags: string[] = [];

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
      tap(({gameVersion, tags}) => {
        this.selectedGameVersion = gameVersion;
        this.selectedTags = tags?.split(',') || [];
      }),
    ).subscribe();
  }
}
