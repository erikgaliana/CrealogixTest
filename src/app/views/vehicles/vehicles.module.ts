import { NgModule } from '@angular/core';
import { UtilModule } from 'src/app/util/util.module';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';

@NgModule({
  declarations: [VehiclesComponent],
  imports: [VehiclesRoutingModule, UtilModule],
  exports: [VehiclesComponent],
  providers: [],
})
export class VehiclesModule {}
