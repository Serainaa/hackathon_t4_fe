import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-payer-container',
  standalone: false,
  templateUrl: './payer-container.component.html',
  styleUrl: './payer-container.component.scss',
})
export class PayerContainerComponent {
  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.items = [
      {
        label: 'New Transaction',
        icon: 'pi pi-fw pi-home',
        routerLink: './transaction',
      },
      {
        label: 'History',
        icon: 'pi pi-fw pi-calendar',
        routerLink: './history',
      },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: './profile' },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-pencil',
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
