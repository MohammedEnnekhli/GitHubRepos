export interface Repository {
  name: string;
  description: string;
  avatar_url: string;
  starred_url: string;
  open_issues: number;
  stargazers_count: number;
  owner: {
    avatar_url: string;
  };
}
