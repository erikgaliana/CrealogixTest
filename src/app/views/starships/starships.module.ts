import { NgModule } from '@angular/core';
import { UtilModule } from 'src/app/util/util.module';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';

@NgModule({
  declarations: [StarshipsComponent],
  imports: [StarshipsRoutingModule, UtilModule],
  exports: [StarshipsComponent],
  providers: [],
})
export class StarshipsModule {}
