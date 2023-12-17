import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  gotoAdminProfile(): void {
   
    console.log('Admin profile clicked');
  }
 
}