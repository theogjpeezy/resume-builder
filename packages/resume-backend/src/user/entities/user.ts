import { ObjectId } from "mongodb";
import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { ModelBase } from "../../dto/model-base";

@Entity()
export class User extends ModelBase {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    public id: ObjectId;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public password: string;

    @Column()
    public username: string;

    @Column()
    public email: string;

    @Column()
    public primaryPhone: string;
}
