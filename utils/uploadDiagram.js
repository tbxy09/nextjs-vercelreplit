import { Redis } from 'upstash';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function uploadDiagram(diagramType, diagramUrl) {
  const diagramId = generateDiagramId();
  const key = `${diagramType}:${diagramId}`;
  await redis.set(key, diagramUrl);
  return `/${diagramType}/${diagramId}.png`;
}

function generateDiagramId() {
  // Generate a unique diagram ID
  return Math.random().toString(36).substr(2, 9);
}