import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from '../../services/reset-password/reset-password.service';

interface ResetPasswordForm {
  email: FormControl
}

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    ResetPasswordService
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup<ResetPasswordForm>

  constructor(
    private router: Router,
    private resetPasswordService: ResetPasswordService,
    private toastService: ToastrService
  ) {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  submit() {
    this.resetPasswordService.resetPassword(this.resetPasswordForm.value.email).subscribe({
      next: () => {
        this.toastService.success("Insira a nova senha!")
        this.router.navigate(["new-password"])
      },
      error: () => this.toastService.error("Erro inesperado")
    });
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
