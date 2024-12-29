import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Campus } from '../../campus/entities/campus.entity';

@Entity()
export class Facultad {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @ManyToOne(() => Campus)
  @JoinColumn({ name: 'campus_id' })
  campus: Campus;
}
