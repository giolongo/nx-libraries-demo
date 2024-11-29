import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLinkActive, RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter<void>();

}
