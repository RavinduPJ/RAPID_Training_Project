/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
export class BaseEntity {

    @PrimaryGeneratedColumn()
    id? : number;

    @CreateDateColumn({
        nullable: true
    })
    CreateDate? : Date;

    @CreateDateColumn({
        nullable: true
    })
    UpdateAt? : Date;
}