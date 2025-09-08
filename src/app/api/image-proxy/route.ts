import { NextResponse } from "next/server";

/**
 * Proxies external images through your own domain
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Missing url parameter" },
      { status: 400 }
    );
  }

  try {
    const upstream = await fetch(url);

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Failed to fetch image (${upstream.status})` },
        { status: upstream.status }
      );
    }

    // Pass through the image body with appropriate headers
    return new Response(upstream.body, {
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "image/jpeg",
        "Cache-Control": "public, max-age=86400", // 1 day cache
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Upstream fetch failed" },
      { status: 500 }
    );
  }
}
