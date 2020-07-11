import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { ValidatePassword } from "./must-match/validate-password";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  submitted = false;

  // City names
  City: any = ['India', 'America', 'Japan', 'Russia']
  
  constructor(
    public fb: FormBuilder,
  ) {}

  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName: ['', [Validators.required]]
    }),
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    address: this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cityName: ['', [Validators.required]]
    }),
    gender: ['male'],
    PasswordValidation: this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },{
      validator: ValidatePassword.MatchPassword // your validation method
    }
    ),
  })  

   // Getter method to access formcontrols
  get myForm() {
    return this.registrationForm.controls;
  }
  
  // Choose city using select dropdown
  changeCity(e) {
    this.registrationForm.get('address.cityName').setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    if(!this.registrationForm.valid) {
      alert('Please fill all the required fields to create!')
      return false;
    } else {
      console.log(this.registrationForm.value)
    }
  }

}