// export interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
//   image?: string;
// }

export interface Post {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string; //"2024-05-20T13:20:00Z",
  content: string;
}

export interface Source {
  id: string | number | null;
  name: string;
}
