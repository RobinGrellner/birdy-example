import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface UserProps {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  address: {
    city: string;
  };
  bank: {
    currency: string;
  };
}

export default function UserOverviewCard({ user }: { user: UserProps }) {
  return (
    <Link className="grid-cols-1" href={`/${user.id}`}>
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
  );
}
