import { getUsers } from "@/lib/calls";

import UserOverviewCard from "./ui/UserOverviewCard";

export default async function HomePage() {
  const users = await getUsers(10, 0);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">User List</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user: any) => (
          <UserOverviewCard key={user.id} user={user}></UserOverviewCard>
        ))}
      </div>
    </main>
  );
}
