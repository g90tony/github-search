export class User {
  constructor(
    public name: string,
    public email: string,
    public blog: string,
    public twitter_username: string,
    public company: string,
    public location: string,
    public hireable: boolean,
    public bio: string
  ) {
    this.name = name;
    this.email = email;
    this.blog = blog;
    this.twitter_username = twitter_username;
    this.company = company;
    this.location = location;
    this.hireable = hireable;
    this.bio = bio;
  }

  fetchUserSearch() {
    //add the http service that is responsible for search users that match with the search criteria.
  }

  fetchUserInfo() {
    //add the http service that is responsible for fetching on user's data by the userID
  }
}
