import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TokenStorageService } from '../../_services/token-storage.service';
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private _router: Router) { }

  ngOnInit(): void {
  }

  logOut(event: Event):void {
    event.preventDefault();
    this.tokenStorage.signOut();
    this._router.navigate(['/login'])
        .then(() => {
          window.location.reload();
        });
  }

}
