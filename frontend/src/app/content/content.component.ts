import {Component} from '@angular/core';
import {LoginFormComponent} from '../login-form/login-form.component';
import {RegisterComponent} from '../register/register.component';
import {NgClass} from '@angular/common';
import {AuthContentComponent} from '../auth-content/auth-content.component';
import {AxiosService} from '../axios.service';

@Component({
  selector: 'app-content',
  imports: [
    LoginFormComponent,
    RegisterComponent,
    NgClass,
    AuthContentComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(private axiosService: AxiosService) {
  }

  active: string = "login";

  onLoginTab() {
    this.active = "login";
  }

  onRegisterTab() {
    this.active = "register";
  }

  onLogin(input: any) {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    );
  }
}
