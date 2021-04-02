import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeLog } from '../../Components/change-log/change-log.model';
import { ChangeLogSave } from '../../Components/change-log-save/change-log-save.model';
import { ClsAuthService } from '../cls-auth/cls-auth.service';

const apiUrl:string = "https://localhost:44384/api/changelog/";

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient, private socialAuthService: ClsAuthService) {
    this.httpHeaders = new HttpHeaders().set("Authorization", this.socialAuthService.socialUser.idToken);
  }

  get(): Observable<ChangeLog[]> {  
    return this.http.get<ChangeLog[]>(apiUrl, { headers: this.httpHeaders });
  }

  post(changeLog: ChangeLogSave): Observable<boolean> {
    return this.http.post<boolean>(apiUrl, changeLog, { headers: this.httpHeaders });
  }

  delete(logId: number): Observable<boolean> {    
    return this.http.delete<boolean>(apiUrl + logId, { headers: this.httpHeaders });
  }
}
