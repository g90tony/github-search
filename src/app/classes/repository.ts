export class Repository {
  constructor(
    private repo_name: string,
    private language: string,
    private homepage: string,
    private stargazers: number,
    private description: string,
    private owner: string,
    private bio: string,
    private url: string
  ) {
    this.repo_name = repo_name ? repo_name : ' Not Available';
    this.language = language ? language : 'Not Available';
    this.homepage = homepage ? homepage : 'Not Available';
    this.stargazers = stargazers ? stargazers : 0;
    this.description = description ? description : ' Not Available';
    this.owner = owner ? owner : ' Not Available';
    this.bio = bio ? bio : ' Not Available';
    this.url = url ? url : ' Not Available';
  }
}
