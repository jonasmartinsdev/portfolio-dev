
export interface IHome {
  _id: string;
  resume: string;
  image: string;
  about: string;
}

export interface IProjects{
  _id: string;
  view:string;
  github: string;
  image: string;
}

export interface IAbout{
  _id: string;
  image: string;
  text: {
    _key: string;
    paragraph: string
  }[]
}