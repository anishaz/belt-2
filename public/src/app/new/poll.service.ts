import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class PollService {

  constructor(private _http: Http) { }

  addQuestion(question){
    return this._http.post('/api/questions', question).map((response: Response) => response.json()).toPromise();
  }

  showQuestion(question){
    return this._http.get('/api/questions/'+question).map((response:Response)=>response.json()).toPromise()
  }

  addVote1(question_id){
    return this._http.get('/api/vote1/' + question_id).map( (response:Response)=>response.json() ).toPromise()
  }

  addVote2(question_id){
    return this._http.get('/api/vote2/' + question_id).map( (response:Response)=>response.json() ).toPromise()
  }

  addVote3(question_id){
    return this._http.get('/api/vote3/' + question_id).map( (response:Response)=>response.json() ).toPromise()
  }

  addVote4(question_id){
    return this._http.get('/api/vote4/' + question_id).map( (response:Response)=>response.json() ).toPromise()
  }

}
