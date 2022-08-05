import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
