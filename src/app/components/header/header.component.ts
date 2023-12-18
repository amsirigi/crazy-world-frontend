import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  gotoAdminProfile(): void {
    console.log('Admin profile clicked');
  }

  constructor(private authService: AuthService){}
 
  isLoggedIn(){
    return this.authService.isLoggedIn;
  }
 
}