import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeLog } from '../../Components/change-log/change-log.model';
import { ChangeLogSave } from '../../Components/change-log-save/change-log-save.model';

const apiUrl:string = "https://localhost:44384/api/changelog/";

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    var idToken:any = sessionStorage.getItem('idToken');
    this.httpHeaders = new HttpHeaders().set("Authorization", idToken);
  }

  get(): Observable<ChangeLog[]> {
    return this.http.get<ChangeLog[]>(apiUrl, { headers: this.httpHeaders });
  }

  post(changeLog: ChangeLogSave): Observable<boolean> {
    return this.http.post<boolean>(apiUrl, changeLog, { headers: this.httpHeaders });
  }

  put(changeLog: ChangeLogSave): Observable<boolean> {
    return this.http.put<boolean>(apiUrl + changeLog.identity, changeLog, { headers: this.httpHeaders });
  }

  delete(logId: number): Observable<boolean> {    
    return this.http.delete<boolean>(apiUrl + logId, { headers: this.httpHeaders });
  }
}
