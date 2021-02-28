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
  MISCELLANEOUS = 'Miscellaneous',
  MS = 'Microsoft',
  PROGRAMMING = 'Programming',
  MSDOTNET = 'Microsoft .NET',
  PYTON = 'Python',
  MOBILE_TECH = 'Mobile Technology',
  POWER_BUUILDER = 'PowerBuilder',
  SOFT_ENGINERING = 'Software Engineering',
  BUSINESS = 'Business',
  OBJ_TECH_PROGRAMMING = 'Object-Technology Programming',
  COMPUTER_GRAFICS = 'Computer Graphics',
  CLIENT_SERVER = 'Client-Server',
  OOP = 'Object-Oriented Programming',
}
