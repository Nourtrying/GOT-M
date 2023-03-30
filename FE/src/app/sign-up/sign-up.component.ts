import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username = ''; // provide default value
  email = ''; // provide default value
  discordTag = ''; // provide default value
  password = ''; // provide default value
  confirmPassword = ''; // provide default value

  constructor(){

  }

  ngOnInit(){

  }

  add(form: any) {
    console.log(form);
  }

}
