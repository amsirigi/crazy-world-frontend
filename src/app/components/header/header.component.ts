import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  gotoAdminProfile(): void {
    // You can navigate to the admin profile page using router.navigate if you're using Angular routing
    // Example: this.router.navigate(['/admin-profile']);
 
    // Or perform any other action related to the admin profile
    // For example, displaying a message
    console.log('Admin profile clicked');
  }
 
}