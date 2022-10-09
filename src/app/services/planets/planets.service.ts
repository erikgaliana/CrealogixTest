import { Injectable } from '@angular/core';
import { Page } from 'src/app/models/page';
import { Planet } from 'src/app/models/planet';
import { RestService } from '../rest/rest.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private resourceUrl: string = 'planets/';
  constructor(private restService: RestService) {}

  public getPlanets() {
    return this.restService.get<Page>(this.resourceUrl);
  }

  public getPlanet(id: number) {
    return this.restService.get<Planet>(this.resourceUrl + id);
  }

  public search(search: any) {
    if (localStorage.getItem('search')) {
      localStorage.setItem(
        'search',
        'planets?search=' + search + ',' + localStorage.getItem('search')
      );
    } else {
      localStorage.setItem('search', 'planets?search=' + search);
    }

    return this.restService.get<Page>(this.resourceUrl, { search });
  }
}
