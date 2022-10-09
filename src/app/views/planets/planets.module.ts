import { NgModule } from '@angular/core';
import { UtilModule } from 'src/app/util/util.module';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [PlanetsComponent, PlanetComponent],
  imports: [PlanetsRoutingModule, UtilModule],
  exports: [PlanetsComponent, PlanetComponent],
  providers: [],
})
export class PlanetsModule {}
