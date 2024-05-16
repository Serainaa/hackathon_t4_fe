import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shop-container',
  standalone: false,
  templateUrl: './shop-container.component.html',
  styleUrl: './shop-container.component.scss'
})
export class ShopContainerComponent {
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
      },
    ];

    this.activeItem = this.items[0];
  }

  logout(): void {
    localStorage.removeItem('TOKEN');
    this.router.navigate(["/"]);
  }

}
