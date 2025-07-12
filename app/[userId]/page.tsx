import { getUserById } from "@/lib/calls";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default async function UserPage({ params }: { params: { userId: string } }) {
  const user = await getUserById(params.userId);

  return (
    <main className="p-6">
      <Card>
        <CardContent className="p-6 flex flex-col items-center">
          <img
            src={user.image}
            alt={user.firstName}
            width={120}
            height={120}
            className="rounded-full mb-4"
          />
          <h2 className="text-xl font-bold mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500 mb-1">Gender: {user.gender}</p>
          <p className="text-gray-500 mb-1">Age: {user.age}</p>
          <p className="text-gray-500 mb-1">City: {user.city}</p>
          <p className="text-gray-500 mb-1">Currency: {user.currency}</p>
        </CardContent>
      </Card>
    </main>
  );
}
