import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export abstract class BaseRestService {
  public API_URI = '';

  httpOptions: HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(protected httpClient: HttpClient) {}

  private generatePathParmas(params: UriParams): string {
    if (!params || Object.keys(params).length === 0) return '';
    return (
      '?' +
      Object.keys(params)
        .map((key) => {
          if (params[key] == null) return key;
          return key + '=' + params[key];
        })
        .join('&')
    );
  }

  public get<T>(
    path: string,
    params: UriParams = {},
    headers: Headers = {},
    httpOptions = {}
  ): Observable<T> {
    const paramStr = this.generatePathParmas(params);
    const options: HttpOptions = {};
    Object.assign(options, this.httpOptions);
    Object.assign(options, httpOptions);
    options['headers'] = { ...headers };
    return this.httpClient.get<T>(`${this.API_URI}${path}${paramStr}`, options);
  }

  public post<T>(
    path: string,
    body: any,
    params: UriParams = {},
    headers: Headers = {},
    httpOptions = {}
  ): Observable<T> {
    const paramStr = this.generatePathParmas(params);
    const options: HttpOptions = {};
    Object.assign(options, this.httpOptions);
    Object.assign(options, httpOptions);
    options['headers'] = { ...headers };
    return this.httpClient.post<T>(
      `${this.API_URI}${path}${paramStr}`,
      body,
      options
    );
  }

  public put<T>(
    path: string,
    body: any,
    params: UriParams = {},
    headers: Headers = {},
    httpOptions = {}
  ): Observable<T> {
    const paramStr = this.generatePathParmas(params);
    const options: HttpOptions = {};
    Object.assign(options, this.httpOptions);
    Object.assign(options, httpOptions);
    for (let index in Object.keys(headers)) {
      const key = Object.keys(headers)[index];
      options['headers'].append(key, headers[key]);
    }
    return this.httpClient.put<T>(
      `${this.API_URI}${path}${paramStr}`,
      body,
      options
    );
  }

  public patch<T>(
    path: string,
    body: any,
    params: UriParams = {},
    headers: Headers = {},
    httpOptions = {}
  ): Observable<T> {
    const paramStr = this.generatePathParmas(params);
    const options: HttpOptions = {};
    Object.assign(options, this.httpOptions);
    Object.assign(options, httpOptions);
    for (let index in Object.keys(headers)) {
      const key = Object.keys(headers)[index];
      options['headers'].append(key, headers[key]);
    }
    return this.httpClient.patch<T>(
      `${this.API_URI}${path}${paramStr}`,
      body,
      options
    );
  }

  public getHeaders(): HttpOptions {
    return this.httpOptions;
  }

  public appendHeaders(headers: Headers) {
    for (let index in Object.keys(headers)) {
      const key = Object.keys(headers)[index];
      this.httpOptions['headers'].append(key, headers[key]);
    }
  }

  public delHeader(header: string) {
    this.httpOptions['headers'].delete(header);
  }
}

export interface UriParams {
  [key: string]: any;
}

export interface Headers {
  [key: string]: any;
}

export interface HttpOptions {
  [key: string]: any;
}
