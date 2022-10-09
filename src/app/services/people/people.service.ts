import { Injectable } from '@angular/core';
import { Page } from 'src/app/models/page';
import { People } from 'src/app/models/people';
import { RestService } from '../rest/rest.service';
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private resourceUrl: string = 'people/';
  constructor(private restService: RestService) {}

  public getPeople() {
    return this.restService.get<Page>(this.resourceUrl);
  }

  public getPerson(id: number) {
    return this.restService.get<People>(this.resourceUrl + id);
  }

  public search(search: any) {
    if (localStorage.getItem('search')) {
      localStorage.setItem(
        'search',
        'people?search=' + search + ',' + localStorage.getItem('search')
      );
    } else {
      localStorage.setItem('search', 'people?search=' + search);
    }

    return this.restService.get<Page>(this.resourceUrl, { search });
  }
}
