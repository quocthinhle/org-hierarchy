import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of, retry} from "rxjs";
import {HttpResponse} from "../shared/types/http-response";

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  get<T>({
    url,
    headers,
    queryParams,
  }: {
    url: string,
    headers?: HttpHeaders,
    queryParams: Record<string, boolean | string | number>
  }): Observable<T | HttpResponse<{}>> {
    return this.httpClient.get<T>(url, {
      headers: headers || this.httpOptions.headers,
      params: queryParams
    }).pipe(
      retry(1),
      catchError((err, source) => {
        console.error(err);
        return of({
          success: false,
          data: {},
          message: err.message,
        });
      }),
    );
  }

  handleHttpRequestError(error: any, sourceObservable: Observable<any>) {
    console.error(error);
  }
}
