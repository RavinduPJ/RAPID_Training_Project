/* eslint-disable prettier/prettier */

import { Controller, Logger } from '@nestjs/common';
import  { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MathController {

    //create a logger instance
    private logger = new Logger('MathController');

    //inject the mathService
    constructor(private mathService: MathService){

    }

    //test method
    @MessagePattern('math')
    test(): string {
        return this.mathService.test();
    }

    //add function
    @MessagePattern('add')
    async addfunc(data: number[]) {
        this.logger.log('Adding ' + data.toString());
        return this.mathService.addfunc(data);
    }
}