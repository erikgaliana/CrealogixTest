import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsModule } from './views/films/films.module';
import { HeaderComponent } from './views/header/header.component';
import { NavComponent } from './views/nav/nav.component';
import { PeopleModule } from './views/people/people.module';
import { PlanetsModule } from './views/planets/planets.module';
import { SpeciesModule } from './views/species/species.module';
import { StarshipsModule } from './views/starships/starships.module';
import { VehiclesModule } from './views/vehicles/vehicles.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UtilModule } from './util/util.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmsModule,
    PeopleModule,
    PlanetsModule,
    SpeciesModule,
    StarshipsModule,
    VehiclesModule,
    NgbModule,
    HttpClientModule,
    UtilModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
