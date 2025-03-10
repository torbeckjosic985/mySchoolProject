import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor() {}
  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
}