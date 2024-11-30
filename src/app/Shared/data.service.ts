import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private isDarkTheme = new BehaviorSubject<boolean>(true);

  public isDarkTheme$ = this.isDarkTheme.asObservable();
  constructor() {}

  emitIsDarkTheme(isDarkTheme: boolean = true) {
    this.isDarkTheme.next(isDarkTheme);
  }
}
