import { User } from 'src/user/user.Entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    nullable: true,
    length: 200,
  })
  bio: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  profileImage: string;

  @Column({
    type: 'date',
  })
  dateOfBirth?: Date;

  @Column({
    type: 'boolean',
  })
  isMarried?: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  country: string;

  @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
  @JoinColumn() //now in the profile, there will be forgn key userId
  user: User;
}
