import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  supportLanguages = ['en', 'ar'];
  // constructor(
  //   private translateService: TranslateService,
  //   private authService: AuthService
  // ) {
  //   this.translateService.addLangs(this.supportLanguages);
  //   this.translateService.setDefaultLang('en');

  //   const browserLang = this.translateService.getBrowserLang();
  //   this.translateService.use(browserLang);

  //   this.authService.GetUserData();
  // }
}
