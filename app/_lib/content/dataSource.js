const ENABLED_VALUES =
  new Set([
    "1",
    "true",
    "yes",
    "on",
  ]);


const warnedFallbacks =
  new Set();


function envFlag(
  name,
  fallback = false,
) {
  const raw =
    process.env[name]
      ?.trim()
      .toLowerCase();

  if (!raw) {
    return fallback;
  }

  return ENABLED_VALUES.has(raw);
}


/*
 * ==========================================================================
 * LOCAL CONTENT MODE
 * ==========================================================================
 *
 * DEVELOPMENT ONLY:
 *
 * Set:
 *
 * USE_LOCAL_DATA=true
 *
 * in .env.local when MongoDB is intentionally not being used.
 *
 * IMPORTANT FOR PRODUCTION:
 * Remove this flag or set it to false. Production should normally use MongoDB.
 * ==========================================================================
 */

export function isLocalDataMode() {
  return envFlag(
    "USE_LOCAL_DATA",
    false,
  );
}


/*
 * Automatic fallback is deliberately disabled in production.
 *
 * In development it defaults to ON, which means a missing/unavailable
 * MongoDB instance will use localContent.js instead of breaking the page.
 *
 * Set:
 *
 * ALLOW_LOCAL_DATA_FALLBACK=false
 *
 * if you want local development to fail hard when MongoDB is unavailable.
 */
export function canAutomaticallyFallbackToLocalData() {
  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    return false;
  }

  return envFlag(
    "ALLOW_LOCAL_DATA_FALLBACK",
    true,
  );
}


function warnOnce(
  label,
  error,
) {
  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    return;
  }

  if (
    warnedFallbacks.has(label)
  ) {
    return;
  }

  warnedFallbacks.add(label);

  const reason =
    error instanceof Error
      ? error.message
      : String(error || "Unknown database error");

  console.warn(
    `[TekCorp local-data fallback] ${label}: ${reason}`,
  );
}


/*
 * Run a database operation with a safe development-only local fallback.
 *
 * Production behavior:
 * - Explicit USE_LOCAL_DATA=true still uses local data.
 * - Otherwise database failures are re-thrown.
 *
 * Development behavior:
 * - Explicit USE_LOCAL_DATA=true uses local data immediately.
 * - Otherwise MongoDB is attempted first.
 * - If MongoDB fails and ALLOW_LOCAL_DATA_FALLBACK is enabled, local data
 *   is used and a single warning is written to the server console.
 */
export async function withContentDataSource({
  label,
  database,
  local,
}) {
  if (
    typeof database !== "function" ||
    typeof local !== "function"
  ) {
    throw new TypeError(
      "withContentDataSource requires database and local functions.",
    );
  }

  if (
    isLocalDataMode()
  ) {
    return local();
  }

  try {
    return await database();
  } catch (error) {
    if (
      !canAutomaticallyFallbackToLocalData()
    ) {
      throw error;
    }

    warnOnce(
      label || "content query",
      error,
    );

    return local();
  }
}
