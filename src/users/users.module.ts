import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersProvider } from './provider/users.provider';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersProvider, UsersService],
})
export class UsersModule {}
