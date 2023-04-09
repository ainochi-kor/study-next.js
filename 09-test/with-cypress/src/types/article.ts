export interface Article {
  id: string;
  title: string;
  body: string;
  author: {
    id: string;
    name: string;
  };
  image: {
    url: string;
    author: string;
  };
}
