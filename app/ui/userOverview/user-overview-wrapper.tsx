import { getUsers } from "@/lib/calls";
import UserOverviewCard from "./user-overview-card";

export default async function UserOverviewWrapper() {
  const users = await getUsers(10, 0);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {users.map((user: any) => (
        <UserOverviewCard key={user.id} user={user}></UserOverviewCard>
      ))}
    </div>
  );
}
