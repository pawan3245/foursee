import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { TokenStorageService } from './_services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourseefrontend';
  router: string;
  isLoggedIn:boolean = false;

  constructor(
    private _router: Router, 
    private route:ActivatedRoute,
    private tokenStorage: TokenStorageService,
    ){}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
}
