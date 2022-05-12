export class CreateUserDto {
  id: number;

  auth0id: string;

  nickname: string;

  username: string;

  description: string;

  role: string;

  profileUri: string;

  created_at: Date;
}
