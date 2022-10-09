import { NgModule } from '@angular/core';
import { UtilModule } from 'src/app/util/util.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';

@NgModule({
  declarations: [FilmsComponent],
  imports: [FilmsRoutingModule, UtilModule],
  exports: [FilmsComponent],
  providers: [],
})
export class FilmsModule {}
