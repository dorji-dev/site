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

const key = (name: "views" | "unique" | "loves" | "loved") =>
  `${visitsEnv}:visits:${name}`;

export type VisitCounts = {
  views: number;
  unique: number;
  youAre: number | null;
  loves: number;
  loved: boolean;
};

const toCount = (value: unknown) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const hasLoved = async (visitorNumber: number | null) => {
  if (visitorNumber === null) {
    return false;
  }

  const redis = getRedis();
  if (!redis) {
    return false;
  }

  return Boolean(await redis.sismember(key("loved"), String(visitorNumber)));
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
  const loves = toCount(await redis.get(key("loves")));
  const loved = await hasLoved(visitorNumber);

  return {
    views,
    unique,
    youAre: visitorNumber,
    loves,
    loved,
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
    const loves = toCount(await redis.get(key("loves")));
    const loved = await hasLoved(existingVisitorNumber);

    return {
      views,
      unique,
      youAre: existingVisitorNumber,
      loves,
      loved,
    };
  }

  const unique = toCount(await redis.incr(key("unique")));
  const loves = toCount(await redis.get(key("loves")));

  return {
    views,
    unique,
    youAre: unique,
    loves,
    loved: false,
  };
};

export const toggleLove = async (
  visitorNumber: number,
): Promise<Pick<VisitCounts, "loves" | "loved"> | null> => {
  const redis = getRedis();
  if (!redis) {
    return null;
  }

  const member = String(visitorNumber);
  const alreadyLoved = Boolean(await redis.sismember(key("loved"), member));

  if (alreadyLoved) {
    await redis.srem(key("loved"), member);
    const next = toCount(await redis.decr(key("loves")));
    if (next < 0) {
      await redis.set(key("loves"), 0);
    }

    return {
      loves: Math.max(0, next),
      loved: false,
    };
  }

  await redis.sadd(key("loved"), member);
  const loves = toCount(await redis.incr(key("loves")));

  return {
    loves,
    loved: true,
  };
};
