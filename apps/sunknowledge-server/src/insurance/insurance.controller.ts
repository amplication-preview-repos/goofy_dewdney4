import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InsuranceService } from "./insurance.service";
import { InsuranceControllerBase } from "./base/insurance.controller.base";

@swagger.ApiTags("insurances")
@common.Controller("insurances")
export class InsuranceController extends InsuranceControllerBase {
  constructor(
    protected readonly service: InsuranceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
