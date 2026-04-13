import type { User } from "@prisma/client";

export function userToJson(user: User) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    created_at: user.createdAt.toISOString(),
  };
}
