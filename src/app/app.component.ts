import { Component } from '@angular/core';
import { Repository } from './Models/repository';
import { RepositoryService } from './services/repositories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  repos: Array<Repository> = new Array<Repository>();
  currentPageOfRepos: Array<Repository>;

  constructor(private reposiService: RepositoryService) {}

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.reposiService.getRepositories().subscribe((data) => {
      this.repos = data.items;
    });
  }

  onChangePageRepos(currentPageOfRepos: Array<Repository>) {
    // update current page of items
    this.currentPageOfRepos = currentPageOfRepos;
  }
}
