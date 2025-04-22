import {Component} from '@angular/core';
import {LoginFormComponent} from '../login-form/login-form.component';
import {RegisterComponent} from '../register/register.component';
import {NgClass, NgIf} from '@angular/common';
import {AxiosService} from '../axios.service';
import {UserListComponent} from '../user-list/user-list.component';

@Component({
  selector: 'app-content',
  imports: [
    LoginFormComponent,
    RegisterComponent,
    NgClass,
    NgIf,
    UserListComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(private axiosService: AxiosService) {
  }

  users: any[] = [];

  active: string = "login";

  onLoginTab() {
    this.active = "login";
  }

  onRegisterTab() {
    this.active = "register";
  }

  onListTab() {
    this.active = "user-list";
    this.axiosService.request(
      "GET",
      "/users",
      ""
    ).then(response => {
        this.users = response.data
        console.log(this.users)
    }).catch(error => {
      console.error("Error al obtener la lista de usuarios", error);
    });
  }

  onLogin(input: any) {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
    });
  }

  onRegister(input: any) {
    console.log("onRegister frontend")
    this.axiosService.request(
      "POST",
      "/register",
      {
        login: input.login,
        password: input.password,
        edad: input.edad,
        email: input.email
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
    });
  }


  isLogged(): boolean {
    return this.axiosService.getAuthToken() !== null;
  }
}
