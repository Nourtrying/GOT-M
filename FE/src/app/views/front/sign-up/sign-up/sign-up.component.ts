
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      discordTag: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      rememberMe: ['']
    });
  }

  add() {
    console.log(this.signUpForm.value);
  }

}
