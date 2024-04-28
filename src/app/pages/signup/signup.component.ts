import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../../services/signup/signup.service';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  signupForm: FormGroup<SignupForm>

  constructor(
    private router: Router,
    private signupService: SignupService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    this.signupService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => {
        this.toastService.success("Registro efetuado com sucesso!");
        this.navigate();
      },
      error: () => this.toastService.error("Erro inesperado")
    });
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
