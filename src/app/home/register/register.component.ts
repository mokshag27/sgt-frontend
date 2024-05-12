import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private homeService: HomeService, private router: Router) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl(),
      fullname: new FormControl(),
      confirmpassword: new FormControl(),
    });
  }
  submit(): void {
    //console.log(this.registerForm.value)
    this.homeService.register(this.registerForm.value).subscribe((value) => {
      console.log('Registered!');
      this.router.navigate(['/login']);
    });
  }
}
