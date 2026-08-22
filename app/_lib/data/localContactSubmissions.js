import "server-only";

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";


/*
 * DEVELOPMENT ONLY.
 *
 * A single ignored JSON file stores every website contact form locally.
 * Production remains database-only because Vercel filesystems are ephemeral.
 */

const LOCAL_DATA_DIRECTORY = path.join(process.cwd(), ".local-data");
const LOCAL_DATA_FILE = path.join(LOCAL_DATA_DIRECTORY, "contact-submissions.json");
const TEMP_DATA_FILE = path.join(LOCAL_DATA_DIRECTORY, "contact-submissions.tmp");
let writeQueue = Promise.resolve();


async function readSubmissions() {
  try {
    const contents = await readFile(LOCAL_DATA_FILE, "utf8");
    const submissions = JSON.parse(contents);
    return Array.isArray(submissions) ? submissions : [];
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
}


export async function saveLocalContactSubmission(submission) {
  const saved = {
    _id:
      `local-contact-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,

    ...submission,

    createdAt:
      new Date().toISOString(),
  };

  writeQueue = writeQueue.catch(() => undefined).then(async () => {
    await mkdir(LOCAL_DATA_DIRECTORY, { recursive: true });
    const submissions = await readSubmissions();
    submissions.push(saved);
    await writeFile(TEMP_DATA_FILE, `${JSON.stringify(submissions, null, 2)}\n`, "utf8");
    await rename(TEMP_DATA_FILE, LOCAL_DATA_FILE);
  });

  await writeQueue;
  return saved;
}
