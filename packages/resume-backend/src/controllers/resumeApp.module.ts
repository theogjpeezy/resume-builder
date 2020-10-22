import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ResumeModule } from 'src/resume/resume.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from 'src/user/entities/user';
import { Resume } from 'src/resume/entities/resume';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'resumes',
    synchronize: true,
    entities: [User, Resume]
  }), UserModule, ResumeModule],
})
export class ResumeAppModule {}
