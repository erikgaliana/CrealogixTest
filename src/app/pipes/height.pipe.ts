import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height',
})
export class HeightPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    if (parseInt(value) > 200) {
      value = 'High';
    } else if (parseInt(value) < 100) {
      value = 'Low';
    } else {
      value = 'Normal';
    }
    return value;
  }
}
