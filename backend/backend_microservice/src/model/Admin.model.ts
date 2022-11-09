import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id_admin: number;

  @Column()
  nameAdmin: string;

  @Column()
  passAdmin: string;
}
