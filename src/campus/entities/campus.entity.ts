import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Sede } from '../../sede/entities/sede.entity';

@Entity()
export class Campus {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @ManyToOne(() => Sede)
  @JoinColumn({ name: 'sede_id' })
  sede: Sede;
}
