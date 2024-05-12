import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private homeService: HomeService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(): void {
    this.loginForm = new FormGroup({
      user_name: new FormControl(),
      password: new FormControl(),
    });
  }
  login(): void {
    //console.log(this.registerForm.value)
    this.homeService.login(this.loginForm.value).subscribe((value) => {
      console.log(value);
      this.cookieService.set('username', value.username);
      this.cookieService.set('userid', value.userid);
      this.cookieService.set('token', value.token),
        this.cookieService.set('isLoggedIn', '1');
      this.cookieService.set('role', value.user_role);
      console.log(this.loginForm.value);
      if (value.validYN == 1) {
        this.router.navigate(['/student']);
      }
    });
  }
}
