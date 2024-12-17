import { prisma } from "@/lib";

async function getUsers() {
  const users = await prisma.user.findMany();

  return { users };
}

export default async function ConsoleUsersPage() {
  const { users } = await getUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.email} - {user.name}
        </li>
      ))}
    </ul>
  );
}
