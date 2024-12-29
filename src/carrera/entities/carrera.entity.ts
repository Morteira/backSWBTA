import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Facultad } from '../../facultad/entities/facultad.entity';

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @ManyToOne(() => Facultad)
  @JoinColumn({ name: 'facultad_id' })
  facultad: Facultad;
}
