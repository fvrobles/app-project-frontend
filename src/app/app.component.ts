import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { setTitle } from './app.actions';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HttpClientModule,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title$: Observable<string>;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {
    this.title$ = store.select('title');
  }

  ngOnInit() {
    this.getTitleFromAPI();
  }

  getTitleFromAPI() {
    this.http.get(`${environment.apiUrl}/api/title`)
      .subscribe({
        next: (response: any) => {
          this.store.dispatch(setTitle({ title: response.title }));
        },
        error: (error: any) => {
          this.store.dispatch(setTitle({ title: 'Error' }));
        }
      });
  }

  refreshTitle() {
    this.getTitleFromAPI();
  }
}
