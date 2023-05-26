import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {EmpireService} from "../services/empire.service";

@Component({
  selector: 'sm-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  gameVersion$: Observable<string | undefined>;
  tags$: Observable<string[]>;
  gameVersions = [
    '3.8',
  ];
  tags: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private empireService: EmpireService,
  ) {
    this.gameVersion$ = route.params.pipe(map(({gameVersion}) => gameVersion));
    this.tags$ = route.params.pipe(map(({tags}) => tags.split(',')));
  }

  ngOnInit() {
    this.empireService.getTags().subscribe(tags => this.tags = tags);
  }
}
