import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTitleFromAPI();
  }

  getTitleFromAPI() {
    this.http.get('http://localhost:8081/api/title')
      .subscribe({
        next: (response: any) => {
          this.title = response.title;
        },
        error: (error: any) => {
          this.title = 'Error';
        }
      });
  }
}
