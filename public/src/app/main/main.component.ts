import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: any;
  questions: Array<any>;

  constructor(private _mainService: MainService, private _router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getAllQuestions();
  }

  getCurrentUser(){
    this._mainService.getCurrent()
      .then( (user) => this.user = user)
      .catch( (err) => this._router.navigate(['/login']))
  }

  getAllQuestions(){
    this._mainService.getAllQuestions()
      .then((questions) => {
        this.questions = questions;
        console.log(this.questions);
      })
      .catch( (err) => console.log(err))
  }

  deleteQuestion(question_id){
    this._mainService.deleteQuestion(question_id)
      .then((response) => this.getAllQuestions())
      .catch( (err) => console.log(err))
  }

}
