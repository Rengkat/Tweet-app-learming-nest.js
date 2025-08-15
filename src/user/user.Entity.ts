import { Profile } from 'src/profile/profile.Entity';
import { Tweets } from 'src/tweet/tweetEntity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  surname: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: ['insert', 'update'],
    eager: true,
  })
  profile: Profile;

  @OneToMany(() => Tweets, (tweet) => tweet.user)
  tweets: Tweets[];
}
