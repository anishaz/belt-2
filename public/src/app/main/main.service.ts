import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  getCurrent(){
    return this._http.get('/api/current').map( (response: Response) => response.json()).toPromise();
  }

  getAllQuestions(){
    return this._http.get('/api/questions').map( (response: Response) => response.json()).toPromise();
  }

  deleteQuestion(question_id){
    return this._http.delete('/api/questions/' + question_id).map( (response: Response) => response.json()).toPromise();
  }
  
}
