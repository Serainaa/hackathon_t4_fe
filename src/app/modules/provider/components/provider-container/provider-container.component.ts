import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-container',
  standalone: false,
  templateUrl: './provider-container.component.html',
  styleUrl: './provider-container.component.scss'
})
export class ProviderContainerComponent {
  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      { label: 'History', icon: 'pi pi-fw pi-calendar', routerLink: "./history" },
      { label: 'Edit', icon: 'pi pi-fw pi-cog', routerLink:"./profile" },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: (e) => this.logout(),
      }
    ];

    this.activeItem = this.items[0];
  }

  logout(): void {
    localStorage.removeItem('TOKEN');
    this.router.navigate(["/"]);
  }

}
