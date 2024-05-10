import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../../board/entities/board.entity';

@Entity()
export class SubList {
  @PrimaryGeneratedColumn('uuid', { name: 'sub_list_id' })
  id: string;

  @Column()
  name: string;

  @Column()
  @Generated('increment')
  order: number;

  @ManyToOne(
    () => Board,
    (board) => board.sub_list,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'board_id' })
  board: Board;
}
