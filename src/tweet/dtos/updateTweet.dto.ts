import { PartialType } from "@nestjs/mapped-types";
import { IsInt, IsNotEmpty } from "class-validator";
import { createTweetDto } from "./createTweetDto";

export class UpdateTweetDto extends PartialType(createTweetDto){
    @IsNotEmpty()
    @IsInt()
    id:number
}