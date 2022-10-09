import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'films',
        loadChildren: () =>
          import('./views/films/films.module').then((m) => m.FilmsModule),
      },
      {
        path: 'people',
        loadChildren: () =>
          import('./views/people/people.module').then((m) => m.PeopleModule),
      },
      {
        path: 'planets',
        loadChildren: () =>
          import('./views/planets/planets.module').then((m) => m.PlanetsModule),
      },
      {
        path: 'species',
        loadChildren: () =>
          import('./views/species/species.module').then((m) => m.SpeciesModule),
      },
      {
        path: 'starships',
        loadChildren: () =>
          import('./views/starships/starships.module').then(
            (m) => m.StarshipsModule
          ),
      },
      {
        path: 'vehicles',
        loadChildren: () =>
          import('./views/vehicles/vehicles.module').then(
            (m) => m.VehiclesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
