import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { EducationHistoryRecord } from "./education-history-record";
import { JobHistoryRecord } from "./job-history-record";

@Entity()
export class Resume {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    public id: ObjectId;

    @Column()
    public educationHistory: EducationHistoryRecord[];
    
    @Column()
    public jobHistory: JobHistoryRecord[];

    @Column()
    public skills: string[];

    @Column()
    public additionalNotes: string;

    @Column()
    public userId: string;
}
