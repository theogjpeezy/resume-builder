import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { ResumeDto } from 'src/dto/resume-dto';
import { ObjectID, Repository } from 'typeorm';
import { Resume } from './entities/resume';

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(Resume)
        private resumesRepository: Repository<Resume>,
        ) {}
        
    public getResume(id: string) {
        return this.resumesRepository.findOne(new ObjectID(id));
    }

    public getResumesByUser(userId: string) {
        return this.resumesRepository.find({
            where: {
                userId: new ObjectID(userId)
            }
        });
    }

    public deleteResume(id: string) {
        return this.resumesRepository.delete({id: new ObjectID(id)});
    }

    public updateResume(id: string, resume: ResumeDto) {
        const objectId = new ObjectID(id);
        return this.resumesRepository.update({id: objectId}, resume);
    }

    public async createResume(resumeDTO: ResumeDto) {
        const resume =  this.resumesRepository.create(resumeDTO);
        await this.resumesRepository.insert(resume);

        return resume;
    }
}
