import { Component } from '@angular/core';
import {EmpireDto} from "@stellarismeta24.com/types";
import {readCustomEmpireDesigns} from "@stellarismeta24.com/savefiles";
import {EmpireService} from "../services/empire.service";

@Component({
  selector: 'sm-import-empires',
  templateUrl: './import-empires.component.html',
  styleUrls: ['./import-empires.component.scss'],
})
export class ImportEmpiresComponent {
  content = '';

  empires: EmpireDto[] = [];

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
      _id: '',
      tags: ['imported'],
      design,
    }));
  }

  import(empire: EmpireDto) {
    console.log('import', empire);
  }
}
