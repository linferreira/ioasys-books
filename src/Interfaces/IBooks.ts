export interface IBook {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
  publisher: string;
  published: number;
  imageUrl: string;
  description: string;
  language: string;
  isbn10: string;
  isbn13: string;
}


export interface IImageUrl {
  urlImg: string;
};
