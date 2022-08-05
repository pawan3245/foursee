import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';
  router = '';
  roles: string[] = [];
  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    
    private _router: Router) { 
    this.router = this._router.url;  
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      this._router.navigate(["dashboard"]);
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password, 'yes').subscribe(
      data => {
        this.tokenStorage.saveToken(data?.payload?.token);
        this.tokenStorage.saveUser(data?.payload?.userInfo);
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this._router.navigate(['/dashboard'])
        .then(() => {
          console.log('reload')
          window.location.reload();
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
