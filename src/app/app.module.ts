import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './views/layout/layout.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { SideMenuComponent } from './views/layout/side-menu/side-menu.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { BreadcrumbComponent } from './views/layout/breadcrumb/breadcrumb.component';
import { AuthInterceptorService } from './views/auth/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BreadcrumbComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class AppModule { }
