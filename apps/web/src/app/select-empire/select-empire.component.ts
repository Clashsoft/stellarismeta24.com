import {Component, OnInit} from '@angular/core';
import {EmpireDto} from "@stellarismeta24.com/types";
import {EmpireService} from "../services/empire.service";

@Component({
  selector: 'sm-select-empire',
  templateUrl: './select-empire.component.html',
  styleUrls: ['./select-empire.component.scss'],
})
export class SelectEmpireComponent implements OnInit {
  empires: EmpireDto[] = [];

  constructor(
    private empireService: EmpireService,
  ) {
  }

  ngOnInit() {
    this.empireService.findAll().subscribe((empires) => {
      this.empires = empires;
    });
  }
}
