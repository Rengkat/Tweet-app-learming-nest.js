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

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  surname: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
    unique: true,
    type: 'varchar',
  })
  email: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: ['insert'],
    eager: true, //fetch related profile
  }) // the profileId will be a foreign key
  // @JoinColumn()
  profile?: Profile;

  @OneToMany(() => Tweets, (tweet) => tweet.user)
  tweets: Tweets[];
}
