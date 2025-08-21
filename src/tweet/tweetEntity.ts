import { IsOptional } from 'class-validator';
import { HashTag } from 'src/hashtag/hastag.entity';
import { User } from 'src/user/user.Entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tweets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 500,
  })
  post: string;

  @ManyToOne(() => User, (user) => user.tweets)
  // @JoinColumn() no need of joint column
  user: User;

  @ManyToMany(()=>HashTag, (hashtag)=>hashtag.tweets)
  @JoinTable()
  hashtags?:HashTag[]

  @Column({
    nullable: true,
  })
  image?: string;

  @Column({ type: 'json', nullable: true })
  reactions: {
    likes: number;
    retweets: number;
    comments: number;
  };

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
