import { NgModule } from '@angular/core';
import { UtilModule } from 'src/app/util/util.module';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';

@NgModule({
  declarations: [SpeciesComponent],
  imports: [SpeciesRoutingModule, UtilModule],
  exports: [SpeciesComponent],
  providers: [],
})
export class SpeciesModule {}
