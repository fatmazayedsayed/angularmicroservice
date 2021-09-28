import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../modules/core/services/user.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
})
export class AuthComponent  {
  authType: String = '';
  title: String = '';

  isSubmitting = false;
  public authForm: FormGroup;

  constructor(
    private userService: UserService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private fb: FormBuilder
  ) {
    this.authForm = new FormGroup({
      email: new FormControl('admin@admin.com'),
      username: new FormControl('admin'),
    });
  }

  submitForm() {
    this.isSubmitting = true;

    const credentials = this.authForm.value;
    this.userService.attemptAuth(this.authType, credentials).subscribe(
      (data) => this.router.navigateByUrl('/hr/user/userlist'),
      (err) => {
        this.isSubmitting = false;
      }
    );
  }
}
