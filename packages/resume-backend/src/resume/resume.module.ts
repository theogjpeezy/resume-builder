import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Resume } from './entities/resume';
import { ExportController } from './export.controller';
import { ExportService } from './export.service';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

@Module({imports: [TypeOrmModule.forFeature([Resume])],
  exports: [ResumeService, ExportService],
  controllers: [ResumeController, ExportController],
  providers: [ResumeService, ExportService],})
export class ResumeModule {}
