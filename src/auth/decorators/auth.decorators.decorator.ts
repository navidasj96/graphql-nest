import { SetMetadata } from '@nestjs/common';

export const AuthDecorators = (...args: string[]) => SetMetadata('auth.decorators', args);
