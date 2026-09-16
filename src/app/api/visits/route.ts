import { cookies } from "next/headers";
import {
  VISITOR_COOKIE,
  readVisitCounts,
  recordVisit,
} from "@/lib/visits";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

const parseVisitorNumber = (value: string | undefined) => {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
};

export async function GET() {
  const cookieStore = await cookies();
  const visitorNumber = parseVisitorNumber(
    cookieStore.get(VISITOR_COOKIE)?.value,
  );
  const counts = await readVisitCounts(visitorNumber);

  if (!counts) {
    return Response.json(
      { error: "Visit tracking is not configured." },
      { status: 503 },
    );
  }

  return Response.json(counts);
}

export async function POST() {
  const cookieStore = await cookies();
  const existingVisitorNumber = parseVisitorNumber(
    cookieStore.get(VISITOR_COOKIE)?.value,
  );
  const counts = await recordVisit(existingVisitorNumber);

  if (!counts) {
    return Response.json(
      { error: "Visit tracking is not configured." },
      { status: 503 },
    );
  }

  if (existingVisitorNumber === null && counts.youAre !== null) {
    cookieStore.set(VISITOR_COOKIE, String(counts.youAre), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: ONE_YEAR_SECONDS,
    });
  }

  return Response.json(counts);
}
