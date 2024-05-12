import { Component } from '@angular/core';
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

  ngOnInit() {
    this.items = [
      { label: 'New Transaction', icon: 'pi pi-fw pi-home', routerLink: "./transaction" },
      { label: 'History', icon: 'pi pi-fw pi-calendar', routerLink: "./history" },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink:"./profile" }
    ];

    this.activeItem = this.items[0];
  }
}
