import { Component, OnInit } from '@angular/core';
import { ChangeLog } from './change-log.model';
import { ChangeLogService } from '../../Services/change-log/change-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {

  constructor(private router: Router, private changeLogService : ChangeLogService) { }

  ngOnInit() {
    this.changeLogService.get().subscribe((response: ChangeLog[]) => {
      this.changeLogs = response;
    });
  }

  changeLogs : ChangeLog[] = [];

  deleteLog(logId: number): void {
    this.changeLogService.delete(logId).subscribe((response: boolean) => {      
      this.router.navigate(['/'])
    });
  }

  updateLog(changeLog: ChangeLog): void {

    this.router.navigate(['/save-log'], { state: changeLog });
  }
}
