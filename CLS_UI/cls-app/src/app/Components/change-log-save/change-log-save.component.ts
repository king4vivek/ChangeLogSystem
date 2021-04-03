import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { ChangeLogSave } from './change-log-save.model';
import { ChangeLogService } from '../../Services/change-log/change-log.service';

@Component({
  selector: 'app-change-log-save',
  templateUrl: './change-log-save.component.html',
  styleUrls: ['./change-log-save.component.css']
})
export class ChangeLogSaveComponent {

  changeLogForm: ChangeLogSave = new ChangeLogSave;
  
  constructor(private router: Router, private changeLogService : ChangeLogService) {
  }

  ngOnInit() {
    if(history.state){
      this.changeLogForm = history.state;
    }
  }
  
  SaveLog() {
    this.changeLogForm.type = parseInt(this.changeLogForm.type);
    if(this.changeLogForm.identity > 0){
      this.changeLogService.put(this.changeLogForm).subscribe((response: boolean) => {
        this.router.navigate(['/change-logs'])
      });
    } else {
      this.changeLogService.post(this.changeLogForm).subscribe((response: boolean) => {
        this.router.navigate(['/change-logs'])
      });
    }
  }

}
