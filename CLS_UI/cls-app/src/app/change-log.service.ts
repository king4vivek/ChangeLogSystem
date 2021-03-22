import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeLog } from './change-log/change-log.model';
import { ChangeLogSave } from './change-log-save/change-log-save.model';

const apiUrl:string = "https://localhost:44384/api/changelog";

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  constructor(private http: HttpClient) { }

  get(): Observable<ChangeLog[]> {
  
    return this.http.get<ChangeLog[]>(
      apiUrl);
  }

  post(changeLog: ChangeLogSave): Observable<boolean> {

    return this.http.post<boolean>(
      apiUrl,changeLog);
  }
}
