import { Component, OnInit } from '@angular/core';
import { PollService } from './poll.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: any;
  
  constructor(private _pollService:PollService, private _router: Router) { }

  ngOnInit() {
  }

  addQuestion(formData){
    this._pollService.addQuestion(formData.value)
      .then((response) => {
        this._router.navigate(['/main'])
      })
      .catch( (err) => this.errors = err._body.split(','))
    formData.reset()
  }

}
