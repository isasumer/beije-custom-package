import { IsEmail, IsNotEmpty, Matches, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9_\-.]{3,30}$/)
  username!: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(254)
  email!: string;
}


