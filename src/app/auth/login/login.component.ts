import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // passowrdhide/show
    show_button: Boolean = false;
    show_eye: Boolean = false;
  
    // login form 
    loginForm: FormGroup;
  
    // form submit
    submitted = false;
    isLoggedIn = false;
    returnUrl: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.setLoginValidation();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  // validation form
  setLoginValidation() {
   this.loginForm = this.fb.group({
     // email: new FormControl('', [Validators.required, Validators.email]),
     username: new FormControl('pradeep.b@paynet.co.in', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
     password: new FormControl('admin@123', Validators.required),
   })
 }

 showPassword() {
   this.show_button = !this.show_button;
   this.show_eye = !this.show_eye;
 }

 onLoginSubmit(){
  console.log(this.loginForm.value);
  // e.preventDefault();
  localStorage.setItem('isLoggedin', 'true');
  if (localStorage.getItem('isLoggedin')) {
    this.router.navigate(['/invoice']);
  }
 }

}
