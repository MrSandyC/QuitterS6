import { User } from "@auth0/auth0-angular";

export class Queet {
    id!: number;
    message!: string;
    userId!: number;
    created_at!: Date;
    user!: User
}