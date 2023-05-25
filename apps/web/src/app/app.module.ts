import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {EditEmpireComponent} from './edit-empire/edit-empire.component';
import {TooltipDirective} from './directives/tooltip.directive';
import {SelectEmpireComponent} from './select-empire/select-empire.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EditEmpireComponent,
    TooltipDirective,
    SelectEmpireComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
