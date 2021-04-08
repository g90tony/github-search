export class User {
  constructor(
    public avatar: string,
    public bio: string,
    public created_at: string,
    public email: string,
    public followers: number,
    public following: number,
    public location: number,
    public hireable: string,
    public name: string,
    public twitter: string,
    public total_repos: number,
    public github_url: string
  ) {
    this.avatar = avatar;
    this.bio = bio ? bio : 'Not Available';
    this.name = name;
    this.email = email ? email : 'Not Available';
    this.hireable = hireable ? 'Yes' : 'No';
    this.followers = followers;
    this.following = following;
    this.location = location;
    this.created_at = created_at;
    this.twitter = twitter ? twitter : 'Not Available';
    this.total_repos = total_repos;
    this.github_url = github_url;
  }
}
