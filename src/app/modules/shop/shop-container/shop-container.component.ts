import { Component } from '@angular/core';
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
  ngOnInit(): void {
    this.items = [
      { label: 'New Transaction', icon: 'pi pi-fw pi-home', routerLink: "./transaction" },
      { label: 'History', icon: 'pi pi-fw pi-calendar', routerLink: "./history" },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink:"./profile" }
    ];

    this.activeItem = this.items[0];
  }
}
