import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroupDirective } from '@angular/forms';
// import custom validator  class
import { ConfirmedValidator } from '../../helper/confirm-validator/CustomValidators' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  basicInfoRegForm: FormGroup;
  submitted = false;
  show_button: Boolean = false;
  show_button_confirm: Boolean = false;
  show_eye: Boolean = false;
  show_eye_confirm: Boolean = false;

  public hearList= [
    {name: 'Facebook'},
    {name:'Twitter'},
    {name:'LinkedIn'},
    {name:'Google Ads'},
    {name:'Search Engine'},
    {name:'Blog post'},
    {name:'Friend'},
    {name:'Other Medium'},
    {name:'Direct Calling'}
  ];

  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.setBasicInfoValidator();
  }

   setBasicInfoValidator() {
    this.basicInfoRegForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      password: new FormControl('', Validators.required),


      // username: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    },
   
      {
        validator: ConfirmedValidator('password', 'confirm_password')
      }
    )
  }

  get f() { return this.basicInfoRegForm.controls; }

  onbasicInfoRegistrationForm(){

  }
  
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
  showPasswordConfirm(){
    this.show_button_confirm = !this.show_button_confirm;
    this.show_eye_confirm = !this.show_eye_confirm;
  }


  onStrengthChange(score:any){
    // console.log('new score', score);
  }


}
