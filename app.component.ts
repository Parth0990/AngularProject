import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DBService } from './app.dbservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [],
    imports: [RouterModule, CommonModule, FormsModule, HomeComponent, LoginComponent]
})
export class AppComponent {
  title = 'AngularApp';
  UserName:string = '';
  UserPassword:string='';
  HideLoginPage: boolean = true;

    constructor(private dbservice: DBService) {
    }

    OnLogin()
    {
      let strQuery ='';
      if(this.UserName == '0'){
        strQuery = `select * from test`;
      }
      else if(this.UserName == '1'){
        strQuery = `insert into test values (1, 'ram')`;
      }
      else if(this.UserName == '2'){
        strQuery = `update test set name='raj' where id=1`;
      }
      else if(this.UserName == '3'){
        strQuery = `delete from test where id=1`;
      }
      else
      {
        strQuery = `select * from UserAccount where UserName='${this.UserName}' and UserPassword='${this.UserPassword}'`;
      }
      
      let data = this.dbservice.query(strQuery);
      console.log(data);
    }

}
