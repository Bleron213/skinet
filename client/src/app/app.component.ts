import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(
    private httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.httpClient.get('https://localhost:5001/api/products').subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}
