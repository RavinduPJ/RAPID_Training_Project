/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  //create a logger instance
  private logger = new Logger('appController');

  //inject the mathService
  constructor(private appService: AppService) {}

  //add function
  @Post('add')
  async addfunc(@Body('data') data: number[]) {
      this.logger.log('Adding ' + data.toString());
      return this.appService.addfunc(data);
  }

  @Post('insert')
  async addUser(@Body('data') data: string[]) {
    this.logger.log('Adding User' );
    return this.appService.addUser(data)
  }
}
