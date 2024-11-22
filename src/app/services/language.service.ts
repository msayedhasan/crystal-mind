import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage = new BehaviorSubject(null);

  constructor() {}

  // changeLang(lang) {
  //   return this.currentLanguage.next(lang);
  // }
}
