import { Platform as TPlatform } from "../api/platform/Platform";

export const PLATFORM_TITLE_FIELD = "platformName";

export const PlatformTitle = (record: TPlatform): string => {
  return record.platformName?.toString() || String(record.id);
};
