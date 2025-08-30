import { HttpException, HttpStatus } from "@nestjs/common";

export class notFoundException extends HttpException{
    constructor(field){
        super(`${field} not found`, HttpStatus.NOT_FOUND)
    }
}