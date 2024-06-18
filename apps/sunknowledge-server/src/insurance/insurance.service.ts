import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsuranceServiceBase } from "./base/insurance.service.base";

@Injectable()
export class InsuranceService extends InsuranceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
