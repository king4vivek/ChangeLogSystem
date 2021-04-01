import { Component, OnInit } from '@angular/core';
import { ChangeLog } from './change-log.model';
import { ChangeLogService } from '../../Services/change-log/change-log.service';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {

  constructor(private changeLogService : ChangeLogService) { }

  ngOnInit(): void {
    this.changeLogService.get().subscribe((response: ChangeLog[]) => {
      this.changeLogs = response;
    })
  }
  changeLogs : ChangeLog[] = [];
}
