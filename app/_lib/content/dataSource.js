// Compatibility entry point for older server modules.
export {
  canUseAutomaticLocalFallback as canAutomaticallyFallbackToLocalData,
  isLocalDataMode,
  runContentQuery as withContentDataSource,
} from "../data/dataSource";
