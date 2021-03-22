import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router} from "@angular/router"
import { ChangeLogSave } from './change-log-save.model';
import { ChangeLogService } from '../change-log.service';

@Component({
  selector: 'app-change-log-save',
  templateUrl: './change-log-save.component.html',
  styleUrls: ['./change-log-save.component.css']
})
export class ChangeLogSaveComponent implements OnInit {

  changeLogForm: ChangeLogSave = new ChangeLogSave;
  constructor(private router: Router, private changeLogService : ChangeLogService) {
   }


  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    this.changeLogForm = form.value;
    this.changeLogForm.type =  parseInt(form.value.type);
    this.changeLogService.post(this.changeLogForm).subscribe((response: boolean) => {
      this.router.navigate(['/change-logs'])
    })
  }

}
