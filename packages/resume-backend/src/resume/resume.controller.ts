import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ResumeDto } from 'src/dto/resume-dto';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
    constructor(private resumeService: ResumeService) {}
    @Get(':id')
    public getResume(@Param() params) {
        return this.resumeService.getResume(params.id);
    }

    @Get('/user/:userid')
    public getResumesByUser(@Param() params) {
        return this.resumeService.getResumesByUser(params.userid);
    }

    @Delete(':id')
    public deleteResume(@Param() params) {
        return this.resumeService.deleteResume(params.id);
    }

    @Put(':id')
    public updateResume(@Param() params, @Body() resumeDTO: ResumeDto) {
        return this.resumeService.updateResume(params.id, resumeDTO);
    }

    @Post()
    public createResume(@Body() resumeDTO: ResumeDto) {
        return this.resumeService.createResume(resumeDTO);
    }
}
