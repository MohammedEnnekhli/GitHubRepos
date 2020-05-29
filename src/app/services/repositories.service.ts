import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  host: string =
    'https://api.github.com/search/repositories?q=created:>2020-04-19&sort=stars&order=desc';
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<any> {
    return this.http.get(this.host);
  }
}
