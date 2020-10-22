import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from './entities/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService]})
export class UserModule {}
