import {Component, forwardRef, Inject} from '@angular/core';
import {EmpireDto} from "@stellarismeta24.com/types";
import {readCustomEmpireDesigns} from "@stellarismeta24.com/savefiles";
import {EmpireService} from "../services/empire.service";
import {SelectEmpireComponent} from "../select-empire/select-empire.component";

@Component({
  selector: 'sm-import-empires',
  templateUrl: './import-empires.component.html',
  styleUrls: ['./import-empires.component.scss'],
})
export class ImportEmpiresComponent {
  content = '';

  empires: EmpireDto[] = [];

  constructor(
    private readonly empireService: EmpireService,
    @Inject(forwardRef(() => SelectEmpireComponent)) private readonly parent: SelectEmpireComponent,
  ) {
  }

  async readFile(file?: File | null) {
    const text = await file?.text();
    if (!text) {
      return;
    }

    this.content = text;
    await this.readContent();
  }

  async readContent() {
    const designs = await readCustomEmpireDesigns(this.content);
    this.empires = Object.values(designs).map(design => ({
      _id: undefined!,
      tags: ['imported'],
      design,
    }));
  }

  import(empire: EmpireDto) {
    this.empireService.create(empire).subscribe(() => {
      this.empires.splice(this.empires.indexOf(empire), 1);
      this.parent.empires.push(empire);
    });
  }
}