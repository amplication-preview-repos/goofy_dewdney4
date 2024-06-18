/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { InsuranceService } from "../insurance.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InsuranceCreateInput } from "./InsuranceCreateInput";
import { Insurance } from "./Insurance";
import { InsuranceFindManyArgs } from "./InsuranceFindManyArgs";
import { InsuranceWhereUniqueInput } from "./InsuranceWhereUniqueInput";
import { InsuranceUpdateInput } from "./InsuranceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InsuranceControllerBase {
  constructor(
    protected readonly service: InsuranceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Insurance })
  @nestAccessControl.UseRoles({
    resource: "Insurance",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createInsurance(
    @common.Body() data: InsuranceCreateInput
  ): Promise<Insurance> {
    return await this.service.createInsurance({
      data: data,
      select: {
        coverageAmount: true,
        createdAt: true,
        id: true,
        insuranceProvider: true,
        policyNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Insurance] })
  @ApiNestedQuery(InsuranceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Insurance",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async insurances(@common.Req() request: Request): Promise<Insurance[]> {
    const args = plainToClass(InsuranceFindManyArgs, request.query);
    return this.service.insurances({
      ...args,
      select: {
        coverageAmount: true,
        createdAt: true,
        id: true,
        insuranceProvider: true,
        policyNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Insurance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Insurance",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async insurance(
    @common.Param() params: InsuranceWhereUniqueInput
  ): Promise<Insurance | null> {
    const result = await this.service.insurance({
      where: params,
      select: {
        coverageAmount: true,
        createdAt: true,
        id: true,
        insuranceProvider: true,
        policyNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Insurance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Insurance",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateInsurance(
    @common.Param() params: InsuranceWhereUniqueInput,
    @common.Body() data: InsuranceUpdateInput
  ): Promise<Insurance | null> {
    try {
      return await this.service.updateInsurance({
        where: params,
        data: data,
        select: {
          coverageAmount: true,
          createdAt: true,
          id: true,
          insuranceProvider: true,
          policyNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Insurance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Insurance",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteInsurance(
    @common.Param() params: InsuranceWhereUniqueInput
  ): Promise<Insurance | null> {
    try {
      return await this.service.deleteInsurance({
        where: params,
        select: {
          coverageAmount: true,
          createdAt: true,
          id: true,
          insuranceProvider: true,
          policyNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
