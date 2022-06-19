import { Queet } from './queet';

export class User {
  id?: number;

  auth0id?: string;

  nickname!: string;

  description?: string;

  location?: string;

  username!: string;

  role?: string;

  profileUri!: string;

  queets?: Queet[];

  followers?: User[];

  following?: User[];
}
