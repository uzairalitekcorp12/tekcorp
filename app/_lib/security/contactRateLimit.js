import "server-only";


const STORE_KEY =
  "__tekcorpContactRateLimit";


function getStore() {
  if (!globalThis[STORE_KEY]) {
    globalThis[STORE_KEY] = new Map();
  }

  return globalThis[STORE_KEY];
}


export function checkContactRateLimit({
  key = "anonymous",
  maxAttempts = 5,
  windowMs = 60_000,
} = {}) {
  const store = getStore();
  const now = Date.now();
  const current =
    store.get(key) || {
      count: 0,
      resetAt:
        now + windowMs,
    };

  if (now >= current.resetAt) {
    current.count = 0;
    current.resetAt =
      now + windowMs;
  }

  current.count += 1;

  store.set(key, current);

  return {
    allowed:
      current.count <=
      maxAttempts,

    remaining:
      Math.max(
        0,
        maxAttempts -
          current.count,
      ),

    resetAt:
      current.resetAt,
  };
}
