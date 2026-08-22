import "server-only";


const TRUE_VALUES =
  new Set([
    "1",
    "true",
    "yes",
    "on",
  ]);


function readBooleanEnv(
  name,
  fallback = false,
) {
  const value =
    process.env[name]
      ?.trim()
      .toLowerCase();

  if (!value) {
    return fallback;
  }

  return TRUE_VALUES.has(
    value,
  );
}


/*
 * DEVELOPMENT / OFFLINE MODE
 * --------------------------
 *
 * USE_LOCAL_DATA=true
 *
 * forces the article / case-study routes to use localContent.js.
 *
 * Production should keep USE_LOCAL_DATA disabled.
 */
export function isLocalDataMode() {
  if (!process.env.MONGODB_URI?.trim()) {
    return true;
  }

  return readBooleanEnv(
    "USE_LOCAL_DATA",
    false,
  );
}


/*
 * When MongoDB is not available during local development, allow the content
 * routes to keep rendering using dummy content.
 *
 * This is intentionally disabled in production so a real database outage
 * cannot be silently hidden by demo records.
 */
export function canUseAutomaticLocalFallback() {
  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    return false;
  }

  return readBooleanEnv(
    "ALLOW_LOCAL_DATA_FALLBACK",
    true,
  );
}


const warnedLabels =
  new Set();


function warnFallbackOnce(
  label,
  error,
) {
  if (
    process.env.NODE_ENV ===
      "production" ||
    warnedLabels.has(
      label,
    )
  ) {
    return;
  }

  warnedLabels.add(
    label,
  );

  console.warn(
    `[TekCorp content fallback] ${label}: ${
      error instanceof Error
        ? error.message
        : String(error || "Unknown error")
    }`,
  );
}


export async function runContentQuery({
  label,
  database,
  local,
}) {
  if (
    typeof database !==
      "function" ||
    typeof local !==
      "function"
  ) {
    throw new TypeError(
      "runContentQuery requires database and local query functions.",
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
      !canUseAutomaticLocalFallback()
    ) {
      throw error;
    }

    warnFallbackOnce(
      label ||
        "content query",
      error,
    );

    return local();
  }
}
