import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HeightPipe } from '../pipes/height.pipe';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';

@NgModule({
  declarations: [WorkInProgressComponent, HeightPipe],
  imports: [CommonModule, NgbPaginationModule],
  exports: [
    CommonModule,
    NgbPaginationModule,
    WorkInProgressComponent,
    HeightPipe,
  ],
  providers: [],
})
export class UtilModule {}
