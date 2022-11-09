/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class MathService {

    public addfunc(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
      }

    public test(): string {
        return 'Math Module is working..............!';
    }
}