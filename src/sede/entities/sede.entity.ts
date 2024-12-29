import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sede {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  nombre: string;
}
