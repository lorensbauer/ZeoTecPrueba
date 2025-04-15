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

  user: string = "";
  userPassword: string = "";
  edad: number = 0;
  email: string = "";


  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      "user": this.user,
      "userPassword": this.userPassword,
      "edad": this.edad,
      "email": this.email
    });
  }
}
