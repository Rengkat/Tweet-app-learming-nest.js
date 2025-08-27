import { HttpException, HttpStatus } from "@nestjs/common";

export class UserAlreadyExistEception extends HttpException{
    constructor(fildname, fieldValue){
        super(`The ${fildname}, ${fieldValue} aleady exist`,HttpStatus.CONFLICT)
    }
}