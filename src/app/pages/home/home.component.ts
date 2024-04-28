import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  constructor(
    private router: Router,
    private toastService: ToastrService
  ) {}

  submit() {
    sessionStorage.removeItem("auth-token")
    this.toastService.success("Logout efetuado com sucesso!")
    this.navigate();
  }

  navigate() {
    this.router.navigate(["/login"])
  }
}
