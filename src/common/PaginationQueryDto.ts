import { IsInt, IsOptional } from "class-validator"

export class PaginationQueryDto {
    @IsOptional()
    @IsInt()
    page:number

    @IsOptional()
    @IsInt()
    limit?:number
}