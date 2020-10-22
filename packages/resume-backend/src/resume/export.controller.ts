import { Controller, Get, Param } from '@nestjs/common';

@Controller('export')
export class ExportController {
    @Get(':id')
    public getResumePdf(@Param() params) {

    }

    @Get()
    public getAllResumePdfs() {
        
    }
}
