import { Component, OnInit } from '@angular/core';
import { PollService } from '../new/poll.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  question: any;
  question_id: String;

  constructor(private _pollService:PollService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      this.question_id = param.id});

    this.showQuestion(this.question_id);
  }

  showQuestion(id){
    this._pollService.showQuestion(id)
      .then( (question)=> this.question = question)
      .catch( (err)=>console.log(err) )
  }

  addVote1(id){
    this._pollService.addVote1(id)
      .then( (response) => this.showQuestion(this.question_id))
      .catch( (err) => console.log(err))
  }

  addVote2(id){
    this._pollService.addVote2(id)
      .then( (response) => this.showQuestion(this.question_id))
      .catch( (err) => console.log(err))
  }

  addVote3(id){
    this._pollService.addVote3(id)
      .then( (response) => this.showQuestion(this.question_id))
      .catch( (err) => console.log(err))
  }

  addVote4(id){
    this._pollService.addVote4(id)
      .then( (response) => this.showQuestion(this.question_id))
      .catch( (err) => console.log(err))
  }

}
