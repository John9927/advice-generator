import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'advice-generator';
  results: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.onClickButton();
  }

  onClickButton() {
    this.auth.getAPI().subscribe((results: any) => {
      this.results = results.slip;
    })
  }
}
