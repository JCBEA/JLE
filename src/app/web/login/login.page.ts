import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  async login() {
    await this.loginService.login(this.email, this.password);
  }
}
