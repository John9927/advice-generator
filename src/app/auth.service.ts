import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = "https://api.adviceslip.com/advice";

  constructor(private http: HttpClient) { }

  getAPI() {
    return this.http.get(this.api);
  }
}
