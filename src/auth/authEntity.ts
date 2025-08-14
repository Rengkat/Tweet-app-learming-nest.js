import { Column, Entity } from 'typeorm';

@Entity()
export class Auth {
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
}
