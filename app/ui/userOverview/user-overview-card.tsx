import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { capitalizeFirstLetter } from "@/lib/utils";

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
    <Link href={`/${user.id}`} className="">
      <Card className="py-3 flex h-full w-full items-center justify-center hover:shadow-lg transition duration-300 cursor-pointer">
        <CardContent className="gap-4 h-full">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-full rounded-full object-cover"
          />
          <div className="flex-1r">
            <p className="font-semibold">
              {user.firstName} {user.lastName}
            </p>
            <div className="text-sm">
              <p className="w-fit">
                {user.age}, {capitalizeFirstLetter(user.gender)}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              {user.address.city} · {user.bank.currency}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
