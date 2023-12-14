import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crazy-world-fronend';
  isDarkTheme: boolean = true; // Initially set to dark theme  
   toggleTheme(): 
   void {     this.isDarkTheme = !this.isDarkTheme;   
  }
 }


