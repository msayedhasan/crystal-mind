import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/views/auth/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit, OnDestroy {
  private userSub: Subscription | undefined;
  @Output() closeSide = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      // if (user) {
        this.items = [
          {
            isParent: 'n',
            name: 'Sales',
            icon: 'trending_up',
            route: '/',
          },
          {
            isParent: 'n',
            name: 'Customers',
            icon: 'person',
            route: '/customers',
          },
          {
            isParent: 'n',
            name: 'Inventory',
            icon: 'restaurant',
            route: '/inventory',
          },
          {
            isParent: 'n',
            name: 'Operational',
            icon: 'sync',
            route: '/operational',
          },
          {
            isParent: 'n',
            name: 'Financial',
            icon: 'money',
            route: '/financial',
          },
          {
            isParent: 'n',
            name: 'Employee',
            icon: 'person',
            route: '/employee',
          },
          {
            isParent: 'n',
            name: 'Feedback',
            icon: 'person',
            route: '/feedback',
          },
          {
            isParent: 'n',
            name: 'Marketing',
            icon: 'monitor_heart',
            route: '/marketing',
          },
          {
            isParent: 'n',
            name: 'Alerts',
            icon: 'alarm',
            route: '/alerts',
          },
        ];
      // }
    });
  }
  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  items: any = [];

  closeMenu() {
    this.closeSide.emit();
  }
}
