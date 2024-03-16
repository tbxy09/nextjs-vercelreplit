import { Redis } from '@upstash/redis';

// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });
const redis = Redis.fromEnv();

export async function uploadDiagram(diagramType, svg) {
  const diagramId = generateDiagramId();
  const key = `${diagramType}:${diagramId}`;
  await redis.set(key, svg);
  return `/${diagramType}/${diagramId}`;
}

function generateDiagramId() {
  // Generate a unique diagram ID
  return Math.random().toString(36).substr(2, 9);
}