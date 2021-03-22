import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeLog } from './change-log/change-log.model';

const apiUrl:string = "https://localhost:44384/api/";

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  constructor(private http: HttpClient) { }

  get(): Observable<ChangeLog[]> {
  
    let getUrl:string = apiUrl + "changelog";

    return this.http.get<ChangeLog[]>(
      getUrl);
  }
}
