import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserHttpService } from '../../services/user-http.service';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  newUser: User = {
    userId: 0,
    userName: "",
    userPassword: "",
    allRolesPojo: []
  }

  errorMessage: string = '';

  constructor(private userHttpService: UserHttpService,
              private authService: AuthService,
              private router: Router){}
 
  login(){
    this
      .userHttpService
      .validate(this.newUser)
      .subscribe((response)=>{
        console.log(response);
        // store the response (user object) in sessionStorage
        this.authService.storeUser(response.user);
        this.authService.isLoggedIn = true;
        console.log(this.authService.isLoggedIn)
        this.authService.storeToken(response.token)
        this.router.navigate(['logindisplay']);
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error.error.message
        console.log(this.errorMessage)
      });
    }

}
