import { ProgramViewComponent } from './components/program-view/program-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { SeriesComponent } from './components/series/series.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExerciceCardComponent } from './components/exercice-card/exercice-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExerciceCounterComponent } from './components/exercice-counter/exercice-counter.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programview/:program', component: ProgramViewComponent },
  { path: 'series/:serie', component: SeriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramCardComponent,
    ProgramViewComponent,
    SeriesComponent,
    TopMenuComponent,
    ContactFormComponent,
    FooterComponent,
    ExerciceCardComponent,
    CarouselComponent,
    ExerciceCounterComponent,
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
