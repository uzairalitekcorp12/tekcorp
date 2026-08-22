import "server-only";


/*
 * DEVELOPMENT ONLY.
 *
 * This in-memory store prevents local form testing from failing when MongoDB
 * is unavailable. It is not durable and must not be treated as production
 * persistence.
 */

const STORE_KEY =
  "__tekcorpLocalContactSubmissions";


function getStore() {
  if (!globalThis[STORE_KEY]) {
    globalThis[STORE_KEY] = [];
  }

  return globalThis[STORE_KEY];
}


export function saveLocalContactSubmission(submission) {
  const store = getStore();

  const saved = {
    _id:
      `local-contact-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,

    ...submission,

    createdAt:
      new Date().toISOString(),
  };

  store.push(saved);

  return saved;
}
