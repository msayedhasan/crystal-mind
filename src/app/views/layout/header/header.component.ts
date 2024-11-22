import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/views/auth/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent implements OnInit, OnDestroy {
  // private userSub: Subscription | undefined;
  private userDataSub: Subscription | undefined;  isAuthenticated = false;

  menu = false;
  @Output() openSide = new EventEmitter();
  @Output() changeLangEvent = new EventEmitter();

  testPage?: string;
  
  constructor(private router: Router, private authService: AuthService,private route: ActivatedRoute) { 
    switch (this.route.snapshot.routeConfig?.path) {
      case '/home/cbcl':
        this.testPage = 'CBCL';
        break;
      case '/home/taylor':
        this.testPage = 'Taylor';
        break;
      case '/home/conners':
        this.testPage = 'Conners';
        break;
      case '/home/beck':
        this.testPage = 'Beck';
        break;
      case '/home/pdq':
        this.testPage = 'PDQ';
        break;
      default:
        this.testPage = '';
        break;
    }
  }

  openMenu() {
    this.menu = !this.menu;
   
    this.openSide.emit();
  }

  userData !: User;
  ngOnInit() {
    this.userDataSub = this.authService.userData.subscribe((user) => {
      if(user) {
        this.isAuthenticated = true;
        this.userData = user
      } else {
        this.isAuthenticated = false;
      }
      // this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy(): void {
    // this.userSub?.unsubscribe();
    this.userDataSub?.unsubscribe();  }

  logout() {
    this.authService.logout();
  }

  changeLang() {
    this.changeLangEvent.emit();
  }
}
