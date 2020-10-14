import { ProgramViewComponent } from './component/program-view/program-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramCardComponent } from './component/program-card/program-card.component';
import { SeriesComponent } from './component/series/series.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'programview', component: ProgramViewComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramCardComponent,
    ProgramViewComponent,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
