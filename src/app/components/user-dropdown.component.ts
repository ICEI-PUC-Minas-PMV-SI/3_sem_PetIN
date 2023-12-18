// user-dropdown.component.ts
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css'],
})
export class UserDropdownComponent {
  @ViewChild('dropdown')
  dropdown!: ElementRef;
  @ViewChild('profilePicture', { static: true })
  profilePicture!: ElementRef;
  isOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (this.dropdown === undefined || this.profilePicture === undefined)
      return;
    const isClickedInside =
      this.dropdown.nativeElement.contains(event.target) ||
      event.target === this.profilePicture.nativeElement;
    if (!isClickedInside) {
      this.isOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home').then(() => {
      window.location.reload();
    });
  }
}
