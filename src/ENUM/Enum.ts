export enum EApi {
  users = '/users',
  user = '/user',
}

export enum EUserPrefix {
  users = 'user/getUsersFeatch',
}

export enum ERoutes {
  home = '/',
  details = '/details/:id',
  aboutUs = '/about-us',
  blog = '/blog',
  contacts = '/contacts',
}

export enum EColors {
  mainBackground = '#e9eaef',
  headerBackground = '#273d4c',
  inputBackground = '#225577',
  inputBackgroundBlack = '#072f49',
  headerBackgroundBlack = '#20303a',
  waite = '#ffffff',
  yellowLogo = '#ffc00f',
  orangeNavigation = '#f05022',
}

export enum EValidation {
  minCharacters = 2,
  minCharactersDesc = 25,
}

export const WITHOUT_WHITE_SPACE_REGEXP = /^\S+$/gi;
export const navigation = ['home', 'blog', 'about-us', 'contacts'];
