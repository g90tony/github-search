export class Repository {
  constructor(
    public repoID: string,
    public organizationName: string,
    public name: string,
    public description: string,
    public homepage: string,
    public isPrivate: boolean,
    public visibility: string
  ) {
    this.repoID = repoID;
    this.organizationName = organizationName;
    this.name = name;
    this.description = description;
    this.homepage = homepage;
    this.isPrivate = isPrivate;
    this.visibility = visibility;
  }
}
