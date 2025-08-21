import { Tweets } from "src/tweet/tweetEntity";
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @DeleteDateColumn()
    deletedAt:Date


    @ManyToMany(()=>Tweets, (tweet)=>tweet.hashtags, {onDelete:'CASCADE'})
    tweets:Tweets[]
}