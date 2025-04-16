import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() onSubmitRegisterEvent = new EventEmitter();

  login: string = "";
  password: string = "";
  edad: number = 0;
  email: string = "";



  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      "login": this.login,
      "password": this.password,
      "edad": this.edad,
      "email": this.email
    });
  }
}
