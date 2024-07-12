import { Module } from "@nestjs/common";
import { PlatformConnectorService } from "./platformconnector.service";
import { PlatformConnectorController } from "./platformconnector.controller";
import { PlatformConnectorResolver } from "./platformconnector.resolver";

@Module({
  controllers: [PlatformConnectorController],
  providers: [PlatformConnectorService, PlatformConnectorResolver],
  exports: [PlatformConnectorService],
})
export class PlatformConnectorModule {}
