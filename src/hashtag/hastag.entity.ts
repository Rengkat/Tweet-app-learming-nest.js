import { Tweets } from "src/tweet/tweetEntity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HashTag{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        unique:true,
        type:'varchar',
        length:20,
        nullable:false
    })
    name:string

    @ManyToMany(()=>Tweets)
    @JoinTable()
    tweets:Tweets[]
}