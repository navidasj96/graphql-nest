import { Body, Injectable } from '@nestjs/common';
import { SignInDto } from './dtos/signin.dto';
import { SignInProvider } from './providers/sign-in.provider';

@Injectable()
export class AuthService {
  constructor(
    /**
     * Inject SignInProvider
     */
    private readonly signInProvider: SignInProvider,
  ) {}

  public async signIn(singInDto: SignInDto) {
    return this.signInProvider.signIn(singInDto);
  }
}
