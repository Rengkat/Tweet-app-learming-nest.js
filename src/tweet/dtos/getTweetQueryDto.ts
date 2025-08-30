// want to user DTO insertion- to be able to query pagination 

import { IntersectionType } from "@nestjs/mapped-types"
import { IsDate, IsOptional } from "class-validator"
import { PaginationQueryDto } from "src/common/PaginationQueryDto"

// and at the same time query other things
class GetTweetBaseDto{
    @IsOptional()
    @IsDate()
    startDate:Date

    @IsOptional()
    @IsDate()
    endDate:Date
}

export class GetTweetDto extends IntersectionType(
    GetTweetBaseDto,
    PaginationQueryDto
){}