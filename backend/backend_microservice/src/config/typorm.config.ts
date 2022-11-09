/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { BaseEntity } from "src/entity/base.entity";
import { StudentEntity } from "src/entity/student.entity";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'RAvipraBa0104*',
    database: 'perntodo',
    entities: [StudentEntity, BaseEntity],
    synchronize: true
}