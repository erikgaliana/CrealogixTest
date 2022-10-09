import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { BaseRestService } from './base.rest.service';

@Injectable({
  providedIn: 'root',
})
export class RestService extends BaseRestService {
  public override readonly API_URI = environment.baseUrl;
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }
}
