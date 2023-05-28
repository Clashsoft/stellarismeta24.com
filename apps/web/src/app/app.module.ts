import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { EditEmpireComponent } from './edit-empire/edit-empire.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { SelectEmpireComponent } from './select-empire/select-empire.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpirePreviewComponent } from './empire-preview/empire-preview.component';
import { StartComponent } from './start/start.component';
import { EmpireItemComponent } from './empire-item/empire-item.component';
import { ImportEmpiresComponent } from './import-empires/import-empires.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import {NgbDropdownModule, NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from './localisation/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditEmpireComponent,
    TooltipDirective,
    SelectEmpireComponent,
    EmpirePreviewComponent,
    StartComponent,
    EmpireItemComponent,
    ImportEmpiresComponent,
    GalleryComponent,
    TranslatePipe,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
        FormsModule,
        NgbDropdownModule,
        NgbRating,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
