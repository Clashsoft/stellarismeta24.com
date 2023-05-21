import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {EditEmpireComponent} from './edit-empire/edit-empire.component';
import {TooltipDirective} from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditEmpireComponent,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
