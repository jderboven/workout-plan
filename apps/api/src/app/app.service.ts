import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  private prisma: PrismaClient;

  constructor() {}

  private async getPlanFile(): Promise<any> {
    this.prisma = new PrismaClient();
    const plan = await this.prisma.plan.findFirst({
      include: { days: { include: { exercises: true } } },
    });
    return plan;
  }

  async getPlan(): Promise<any> {
    const plan = await this.getPlanFile();
    return JSON.parse(plan);
  }

  async getDays(): Promise<any> {
    return await this.prisma.plan.findFirst({
      include: { days: { include: { exercises: false } } },
    });
  }

  async getExercises(day: string) {
    return await this.prisma.plan.findFirst({
      include: { days: { include: { exercises: true } } },
      where: { days: { some: { day: { equals: day } } } },
    });
  }
}
