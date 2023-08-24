import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  formLogin = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  formSignup = this.formBuilder.group({
    names: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required],
  })

  ngOnInit() {}


  login(){
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    this.router.navigate(['/tabs/home'])
  }

  signUp(){
    if (this.formSignup.invalid) {
      this.formSignup.markAllAsTouched();
      return;
    }
  }

  getFieldInvalidLogin(field: string) {
    return this.formLogin.get(field)?.invalid && this.formLogin.get(field)?.touched
  }

  getFieldInvalidSignup(field: string) {
    return this.formSignup.get(field)?.invalid && this.formSignup.get(field)?.touched
  }


}
