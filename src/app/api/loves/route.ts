import { cookies } from "next/headers";
import { VISITOR_COOKIE, toggleLove } from "@/lib/visits";

const parseVisitorNumber = (value: string | undefined) => {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
};

export async function POST() {
  const cookieStore = await cookies();
  const visitorNumber = parseVisitorNumber(
    cookieStore.get(VISITOR_COOKIE)?.value,
  );

  if (visitorNumber === null) {
    return Response.json(
      { error: "Visit the page once before loving it." },
      { status: 400 },
    );
  }

  const result = await toggleLove(visitorNumber);

  if (!result) {
    return Response.json(
      { error: "Love tracking is not configured." },
      { status: 503 },
    );
  }

  return Response.json(result);
}
