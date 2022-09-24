import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiGetDate } from '../models/apiGetDate.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');

  }

  public getDate(): Observable<ApiGetDate> {
    return this.http.get<ApiGetDate>(environment.apiHost + '/getDate');
  }

  public sendFraseApi(frase:string): Observable<string> {
    return this.http.post<string>(environment.apiHost + '/returnFrase', {message:frase});
  }
}
