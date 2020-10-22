export class EducationHistoryRecord {
    public collegeName: string;
    public startYear: number;
    public endYear?: number;
    public degreeLevel?: 'B.S.' | 'M.S.' | 'PhD';
    public majors: string[];
    public minors: string[];
    public awards: string[];
}