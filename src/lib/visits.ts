import { getRedis } from "@/lib/redis";

const getVisitsEnv = () => {
  const explicit = process.env.VISITS_ENV?.trim();
  if (explicit) {
    return explicit;
  }

  if (process.env.VERCEL_ENV === "production") {
    return "prod";
  }

  if (process.env.VERCEL_ENV === "preview") {
    return "preview";
  }

  return "dev";
};

const visitsEnv = getVisitsEnv();

export const VISITOR_COOKIE = `dorji_vid_${visitsEnv}`;

const key = (name: "views" | "unique") =>
  `${visitsEnv}:visits:${name}`;

export type VisitCounts = {
  views: number;
  unique: number;
  youAre: number | null;
};

const toCount = (value: unknown) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const readVisitCounts = async (
  visitorNumber: number | null,
): Promise<VisitCounts | null> => {
  const redis = getRedis();
  if (!redis) {
    return null;
  }

  const views = toCount(await redis.get(key("views")));
  const unique = toCount(await redis.get(key("unique")));

  return {
    views,
    unique,
    youAre: visitorNumber,
  };
};

export const recordVisit = async (
  existingVisitorNumber: number | null,
): Promise<VisitCounts | null> => {
  const redis = getRedis();
  if (!redis) {
    return null;
  }

  const views = toCount(await redis.incr(key("views")));

  if (existingVisitorNumber !== null) {
    const unique = toCount(await redis.get(key("unique")));

    return {
      views,
      unique,
      youAre: existingVisitorNumber,
    };
  }

  const unique = toCount(await redis.incr(key("unique")));

  return {
    views,
    unique,
    youAre: unique,
  };
};
