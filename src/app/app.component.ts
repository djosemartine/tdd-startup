import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tdd-project';
  isLoading = true;
  ngOnInit(): void {
    this.isLoading = false;
  }
}
