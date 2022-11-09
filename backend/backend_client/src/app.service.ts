/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
  
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    });
  }
  public addfunc(data: number[]) {
    return this.client.send<number, number[]>('add', data)
  }

  public addUser(data: string[]) {
    return this.client.send<string, string[]>('insert', data)
  }
}
