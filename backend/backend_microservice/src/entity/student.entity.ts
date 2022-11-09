/* eslint-disable prettier/prettier */
import { BaseEntity } from "./base.entity";
import { Entity, Column } from 'typeorm';

@Entity('students')
export class StudentEntity extends BaseEntity {

    @Column({ 
        type: 'varchar', 
        length: 100, 
        nullable: false 
    })
    studentName: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false
    })
    studentId: string;
}