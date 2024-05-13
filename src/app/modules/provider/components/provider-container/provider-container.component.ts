import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-provider-container',
  standalone: false,
  templateUrl: './provider-container.component.html',
  styleUrl: './provider-container.component.scss'
})
export class ProviderContainerComponent {
  items: MenuItem[];
  activeItem: MenuItem;
  ngOnInit(): void {
    this.items = [
      { label: 'History', icon: 'pi pi-fw pi-calendar', routerLink: "./history" },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink:"./profile" }
    ];

    this.activeItem = this.items[0];
  }
}
