import { getUsers } from "@/lib/calls";
import { Separator } from "@/components/ui/separator";

import UserOverviewCard from "./ui/userOverview/user-overview-card";

export default async function HomePage() {
  const users = await getUsers(10, 0);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-3 text-center">User List</h1>
      <Separator className="mb-3" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {users.map((user: any) => (
          <UserOverviewCard key={user.id} user={user}></UserOverviewCard>
        ))}
      </div>
    </main>
  );
}
