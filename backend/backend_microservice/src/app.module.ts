/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/typorm.config';
import { MathModule } from './math/math.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MathModule,
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
