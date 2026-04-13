import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { userToJson } from "@/lib/user-serialize";
import { userIdParamSchema } from "@/lib/user-validators";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const idResult = userIdParamSchema.safeParse(id);
  if (!idResult.success) {
    return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: idResult.data },
  });

  if (!user) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  return NextResponse.json(userToJson(user));
}
