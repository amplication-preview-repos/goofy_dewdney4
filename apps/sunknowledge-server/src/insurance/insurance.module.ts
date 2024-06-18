import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InsuranceModuleBase } from "./base/insurance.module.base";
import { InsuranceService } from "./insurance.service";
import { InsuranceController } from "./insurance.controller";
import { InsuranceResolver } from "./insurance.resolver";

@Module({
  imports: [InsuranceModuleBase, forwardRef(() => AuthModule)],
  controllers: [InsuranceController],
  providers: [InsuranceService, InsuranceResolver],
  exports: [InsuranceService],
})
export class InsuranceModule {}
