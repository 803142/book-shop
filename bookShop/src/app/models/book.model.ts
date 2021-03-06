export interface IBook {
  id: string;
  name: string;
  description: string;
  price: number;
  category: BookCategories;
  createDate: number;
  isAvailable: boolean;
  thumbnailUrl?: string;
}

export enum BookCategories {
  JAVA = 'Java',
  WEB_DEV = 'Web Development',
  INTERNET = 'Internet',
}
