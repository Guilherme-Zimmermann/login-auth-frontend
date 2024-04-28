import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewPasswordService } from '../../services/new-password/new-password.service';

interface NewPasswordForm {
  password: FormControl
  confirmPassword: FormControl
}

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    NewPasswordService
  ],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent {
  newPasswordForm: FormGroup<NewPasswordForm>

  constructor(
    private router: Router,
    private newPasswordService: NewPasswordService,
    private toastService: ToastrService
  ) {
    this.newPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    this.newPasswordService.newPassword(this.newPasswordForm.value.password).subscribe({
      next: () => {
        this.toastService.success("Senha alterada com sucesso!")
        this.router.navigate(["login"])
      },
      error: () => this.toastService.error("Erro inesperado")
    });
  }

  navigate() {
    this.router.navigate(["home"]);
  }
}
