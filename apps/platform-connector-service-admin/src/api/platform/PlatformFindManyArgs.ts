import { PlatformWhereInput } from "./PlatformWhereInput";
import { PlatformOrderByInput } from "./PlatformOrderByInput";

export type PlatformFindManyArgs = {
  where?: PlatformWhereInput;
  orderBy?: Array<PlatformOrderByInput>;
  skip?: number;
  take?: number;
};
