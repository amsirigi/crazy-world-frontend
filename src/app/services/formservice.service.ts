
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formSubmitSubject = new Subject<any>();

  constructor() {}

  submitForm(formData: any): void {
    // Handle the case when formData is null
    if (formData !== null) {
      // Assuming you want to store form data in an array
      this.storeFormData(formData);
      console.log(formData);

      // Notify subscribers (components) that form submission is successful
      this.formSubmitSubject.next(formData);
    }
  }

  getFormSubmitObservable(): Observable<any> {
    return this.formSubmitSubject.asObservable();
  }

  private storeFormData(formData: any): void {
    const storedData: any[] = JSON.parse(localStorage.getItem('storedFormData') || '[]');
    storedData.push(formData);
    localStorage.setItem('storedFormData', JSON.stringify(storedData));
  }
  
}
