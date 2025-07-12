import { getUsers } from "@/lib/calls";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default async function HomePage() {
  const users = await getUsers(10, 0);
  // const userAvatars = getUserAvatars(users);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">User List</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user: any) => (
          <Link className="grid-cols-1" key={user.id} href={`/${user.id}`}>
            <Card className="hover:shadow-lg transition duration-300 cursor-pointer">
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  src={user.image}
                  alt={user.firstName}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user.address.city} · {user.bank.currency}
                  </p>
                </div>
                <div className="text-sm">
                  <p>Age: {user.age}</p>
                  <p>Gender: {user.gender}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
