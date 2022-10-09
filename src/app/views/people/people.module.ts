import { NgModule } from '@angular/core';
import { UtilModule } from 'src/app/util/util.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [PeopleComponent, PersonComponent],
  imports: [PeopleRoutingModule, UtilModule],
  exports: [PeopleComponent],
  providers: [],
})
export class PeopleModule {}
