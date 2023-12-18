import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges{
  userLogged = false;
  constructor(private authService: AuthService) {
    this.userLogged = this.authService.isLogged
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userLogged = this.authService.isLogged
  }
}
