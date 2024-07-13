/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TradeLogWhereInput } from "./TradeLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TradeLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TradeLogWhereInput,
  })
  @ValidateNested()
  @Type(() => TradeLogWhereInput)
  @IsOptional()
  @Field(() => TradeLogWhereInput, {
    nullable: true,
  })
  every?: TradeLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => TradeLogWhereInput,
  })
  @ValidateNested()
  @Type(() => TradeLogWhereInput)
  @IsOptional()
  @Field(() => TradeLogWhereInput, {
    nullable: true,
  })
  some?: TradeLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => TradeLogWhereInput,
  })
  @ValidateNested()
  @Type(() => TradeLogWhereInput)
  @IsOptional()
  @Field(() => TradeLogWhereInput, {
    nullable: true,
  })
  none?: TradeLogWhereInput;
}
export { TradeLogListRelationFilter as TradeLogListRelationFilter };
