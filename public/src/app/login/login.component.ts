import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  logreg(formData){
    this._loginService.logreg(formData.value)
      .then( (user) => this._router.navigate(['/main']))
      .catch( (err) => alert(err))
}

}
