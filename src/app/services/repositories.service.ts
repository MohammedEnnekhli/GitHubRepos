import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  oneMonthAgo: Date = new Date(new Date().setDate(new Date().getDate() - 30));
  oneMonthAgoFormatted = formatDate(
    new Date(this.oneMonthAgo),
    'yyyy-MM-dd',
    'en-US'
  );
  host: string = `https://api.github.com/search/repositories?q=created:>${this.oneMonthAgoFormatted}&sort=stars&order=desc`;
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<any> {
    return this.http.get(this.host);
  }
}
